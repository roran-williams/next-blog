"use client";

import { createContext, useState } from "react";

export const DateContext = createContext();
const today = new Date().toDateString()

export const DateProvider = ({ children }) => {
  const [date, setDate] = useState(today);
  const changeDate = (newDate) => { // Changed parameter name from "date" to "newDate"
    setDate(newDate); // Changed from setTopic to setDate
  };

  return (
    <DateContext.Provider value={{ date, changeDate }}>
      {children}
    </DateContext.Provider>
  );
};
