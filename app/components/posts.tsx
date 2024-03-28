"use client"
import React, { useContext } from "react";
import FeaturePost from "./feature-post";
import { TopicContext } from "@/context/TopicContext";

const Blogs = ({ blogs }: any) => {
  console.log("+++++++++++++++++++++++++++blogs++++++++++++++++++++++++++++++++++");
  console.log(blogs)
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  const { topic } = useContext(TopicContext);
  console.log("+++++++++++++++++++++++++topic from context++++++++++++++++++++++++++++++++++++");
  console.log(topic);
  console.log("+++++++++++++++++++++++++topic from context++++++++++++++++++++++++++++++++++++");


  const filteredBlogs = blogs.data.filter((blog: any) => {
    console.log("+++++++++++++++++++++++++topics data++++++++++++++++++++++++++++++++++++");
    console.log(blog.attributes.topics?.data)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

    return blog.attributes.topics?.data.some((topik: any) => {
      console.log("+++++++++++++++++++++++topic atribute name++++++++++++++++++++++++++++++++++++++");
      console.log(topik.attributes.name);
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

      return topik.attributes.name.toLowerCase() === topic?.toLowerCase();
    });
  });
  console.log(filteredBlogs);

  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBlogs?.map((blog: any) => (
        <div key={blog.id}>
          <FeaturePost blog={blog} />
        </div>
      ))}
    </div>        
  );
};

export default Blogs;
