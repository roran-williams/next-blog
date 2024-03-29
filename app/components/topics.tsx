"use client";
import { TopicContext } from "@/context/TopicContext";
import React, { useContext } from "react";
import Link from "next/link";

const Topic = ({ topik }: any) => {
  const { topic, changeTopic } = useContext(TopicContext);
  return (
    <Link href={"/categories"} style={{textDecoration:"none" }}>
    <div className="nav-scroller py-1 border-bottom">
      <nav className="nav justify-content-between">
          <div
            className={` p-1 rounded cursor-pointer ${
              topik.attributes.name === topic ?  "bg-warning text-light nav-item nav-link link-body-emphasis active" :
               "nav-item nav-link link-body-emphasis "
            }`}            
            onClick={() => changeTopic(topik.attributes.name)}
          >
            {topik.attributes.name}
          </div>
          
      </nav>
    </div>
    </Link>
  );
};

export default Topic;
