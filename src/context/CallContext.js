import React, { useState, createContext, useContext } from "react";
import { LoadingContext } from "./LoadingContext.js";
import * as CallAPI from "../api/callAPI.js";

export const CallContext = createContext({
  calls: [],
  getAllCalls: async () => {},
  getCallById: async () => {},
  archiveAllCalls: async () => {},
  updateCallArchive: async () => {},
  resetCalls: async () => {},
});

export const CallProvider = ({ children }) => {
  const { loadOnRequest } = useContext(LoadingContext);
  const [unarchivedCalls, setUnarchivedCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);

  const getAllCalls = async () => {
    if (!unarchivedCalls.length && !archivedCalls.length) {
      const result = await loadOnRequest(CallAPI.getAllCalls);
      if (result) {
        setUnarchivedCalls(result.filter((call) => !call.is_archived));
        setArchivedCalls(result.filter((call) => call.is_archived));
      }
    }
  };

  const getCallById = async (callId) => {
    if (!unarchivedCalls.length && !archivedCalls.length) {
      const result = await loadOnRequest(() => CallAPI.getCallById(callId));
      return result;
    }

    const calls = [...unarchivedCalls, ...archivedCalls];
    return calls.find((call) => call.id === callId);
  };

  const archiveAllCalls = async () => {
    const result = await loadOnRequest(() =>
      Promise.all(
        unarchivedCalls.map((call) => CallAPI.updateCallArchive(call.id, true))
      )
    );
    if (result) {
      unarchivedCalls.map((call) => (call.is_archived = true));
      setArchivedCalls((prevArchived) => [...prevArchived, ...unarchivedCalls]);
      setUnarchivedCalls([]);
    }
  };

  const resetCalls = async () => {
    const result = await loadOnRequest(CallAPI.resetCalls);
    if (result) {
      archivedCalls.map((call) => (call.is_archived = false));
      setUnarchivedCalls((prevUnarchived) => [
        ...prevUnarchived,
        ...archivedCalls,
      ]);
      setArchivedCalls([]);
    }
  };

  const updateCallArchive = async (id) => {
    const call = await loadOnRequest(() => getCallById(id));
    const newArchivedStat = !call.is_archived;
    const result = await loadOnRequest(() =>
      CallAPI.updateCallArchive(id, newArchivedStat)
    );

    if (result) {
      let newArchivedArray = [];
      let newUnarchivedArray = [];

      if (call.is_archived) {
        const removeAt = archivedCalls.findIndex((call) => call.id === id);
        newArchivedArray = [...archivedCalls];
        newArchivedArray.splice(removeAt, 1);
        newUnarchivedArray = [...unarchivedCalls];
        newUnarchivedArray.push(call);
      } else {
        const removeAt = unarchivedCalls.findIndex((call) => call.id === id);
        newUnarchivedArray = [...unarchivedCalls];
        newUnarchivedArray.splice(removeAt, 1);
        newArchivedArray = [...archivedCalls];
        newArchivedArray.push(call);
      }

      call.is_archived = newArchivedStat;
      setArchivedCalls(newArchivedArray);
      setUnarchivedCalls(newUnarchivedArray);
    }
  };

  return (
    <CallContext.Provider
      value={{
        unarchivedCalls,
        archivedCalls,
        getAllCalls,
        getCallById,
        archiveAllCalls,
        resetCalls,
        updateCallArchive,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};
