import React from "react";
import { topics } from "./blogs";
import Link from "next/link";

interface TopicsProps {
  handleTopicClick: (topic: string) => void;
}

const Topics: React.FC<TopicsProps> = (props) => {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {topics.map((topic, index) => (
          <Link
            key={`topic_${index}`} // Added key prop for React list items
            className="nav-link link-body-emphasis"
            href="#"
            onClick={() => props.handleTopicClick(topic)}
          >
            {topic}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Topics;
