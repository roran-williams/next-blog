"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

interface FeaturePostProps {
  topic: string; // Define topic as a prop
}

interface Blog {
  id: number;
  topic: string;
  title: string;
  content: string;
  image: string;
  creator: string;
  // Add other properties as needed
}

export default function FeaturePost(props: FeaturePostProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://automatic-acorn-7qgw6q65q5vcppq6-8000.app.github.dev/api/roran-williams/blogs/1/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNjg1Mzg4LCJpYXQiOjE3MTA2ODE3ODgsImp0aSI6ImE2MWI1NzViZjRmYTRhYjhiYWNkZGMzMDBkMTU1NTAwIiwidXNlcl9pZCI6Mn0.TyW4qAe1Ux1H4e0A8FgpSnwyZZvVtGKYVkqe2GDgZss"
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBlog(data); // Assuming data is the blog itself, not an array
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

  if (!blog) {
    return <div>No blog found.</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">{blog.title}{props.topic}</h1>
          <p className="lead my-3">{blog.content}</p>
          <p className="lead mb-0">
            <Link href="#" className="text-body-emphasis fw-bold">
              Continue reading...
            </Link>
          </p>
        </div>

        <div className="col-lg-6 ">
          <Image className="rounded img-fluid" alt="feature post image" src="https://source.unsplash.com/500/300/?health" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}
