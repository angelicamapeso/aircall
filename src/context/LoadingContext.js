import React, { createContext, useState } from "react";

export const LoadingContext = createContext({
  isLoading: false,
  error: "",
  loadOnRequest: async () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadOnRequest = async (requestCallback) => {
    setIsLoading(true);
    let result = null;
    try {
      result = await requestCallback();
    } catch (err) {
      console.error(err);
      setError(
        "Sorry, looks like something went wrong. Please try again later!"
      );
    }

    setIsLoading(false);
    return result;
  };

  const clearError = () => {
    setError("");
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, error, loadOnRequest, clearError }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
