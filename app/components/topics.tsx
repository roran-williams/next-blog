"use client";
import { TopicContext } from "@/context/TopicContext";
import React, { useContext } from "react";

const Topic = ({ topik }: any) => {
  const { topic, changeTopic } = useContext(TopicContext);
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
          <div
            className={`p-4 rounded-lg shadow cursor-pointer ${
              topik.attributes.Title === topic ? "bg-light text-dark" : "bg-warning text-white"
            }`}            
            onClick={() => changeTopic(topik.attributes.topic)}
          >
            {topik.attributes.topic}
          </div>
      </nav>
    </div>
  );
};

export default Topic;
