import React, { useState, createContext, useContext } from "react";
import { LoadingContext } from "./LoadingContext.js";
import * as CallAPI from "../api/callAPI.js";

export const CallContext = createContext({
  calls: [],
  getAllCalls: async () => {},
  getCallById: async () => {},
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

  return (
    <CallContext.Provider
      value={{ unarchivedCalls, archivedCalls, getAllCalls }}
    >
      {children}
    </CallContext.Provider>
  );
};
