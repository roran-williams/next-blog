"use client";

import { createContext, useState } from "react";

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState("");
  const changeTopic = (topik) => {
    setTopic(topik);
  };

  return (
    <TopicContext.Provider value={{ topic, changeTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

