import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [difficulty, setDifficulty] = useState("");
  const [selectedDimension, setSelectedDimension] = useState(null);

  const value = {
    currentPage,
    setCurrentPage,
    difficulty,
    setDifficulty,
    selectedDimension,
    setSelectedDimension,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
