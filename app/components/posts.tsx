"use client"
import React, { useContext } from "react";
import FeaturePost from "./feature-post";
import { TopicContext } from "@/context/TopicContext";

const Blogs = ({ blogs }: any) => {
  const { topic } = useContext(TopicContext);
  console.log(topic)

  const filteredBlogs = blogs.data.filter((blog: any) => {
    return blog.attributes.categories.data.some((category: any) => {
      // Perform the comparison between category title and topic
      return category.attributes.Title.toLowerCase() === topic.toLowerCase();
    });
  });
  

//   console.log(blogs.data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          <FeaturePost blog={filteredBlogs[0]} />
    </div>
  );
};

export default Blogs;
