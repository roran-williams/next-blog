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
        const response = await fetch("http://localhost:8000/api/roran-williams/blogs/1", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMTM0ODk3LCJpYXQiOjE3MTA3NzQ4OTcsImp0aSI6Ijc3MmUwMWM0YjRlMzRiNWE4Yzk5NGU1YzliYTJiMDFhIiwidXNlcl9pZCI6M30._qsxUpNvZnoYaJ0BAhLsCudsq7JimQTfUcLhhg0GsFo"
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
          <p className="lead my-3">{blog.content.substring(0, 450)}</p>
          <p className="lead mb-0">
            <Link href="#" className="text-body-emphasis fw-bold">
              Continue reading...
            </Link>
          </p>
        </div>

        <div className="col-lg-6 ">
          <Image className="rounded img-fluid" alt="feature post image" src={blog.image} width={500} height={300} />
        </div>
      </div>
    </div>
  );
}
