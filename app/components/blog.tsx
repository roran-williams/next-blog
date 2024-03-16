"use client"
import React, { useState, useEffect } from 'react';

interface Blog {
  id: number;
  topic:string;
  title: string;
  content: string;
  image:string;
  creator:string;
  // Add other properties as needed
}

export default function BlogComponent() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Specify type of blogs as Blog[]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Specify type of error as string | null

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://automatic-acorn-7qgw6q65q5vcppq6-8000.app.github.dev/api/roran-williams/blogs/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNTkzMDQ2LCJpYXQiOjE3MTA1ODk0NDYsImp0aSI6IjJiOGY5ZmZlMGY4NTQ1OWI5NDhkMjdlN2ZjMjc1ZDhhIiwidXNlcl9pZCI6NH0.NcbIzvx5XnvPYE9LG_l2tCSiD1-f0LSRzM79-eJNsxk"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBlogs(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.topic}</p>
          <p>{blog.content}</p>
          <p>{blog.image}</p>
          <p>{blog.creator}</p>
          {/* Add more blog details here */}
        </div>
      ))}
    </div>
  );
}
