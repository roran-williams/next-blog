import React from "react";
import { topics } from "./blogs";
import Link from "next/link";

const Topics = () => {
  return (
    <div className="nav-scroller py-1 mb-3 border-b border-gray-200">
      <nav className="nav flex justify-between">
        {topics.map((topic, index) => (
          <Link
            key={index}
            id={`topic_${index}`} // Appending a prefix to ensure uniqueness
            className="nav-link link-body-emphasis"
            href="#"
          >
            {topic}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Topics;
