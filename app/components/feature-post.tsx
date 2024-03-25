"use client";
import React, { useState, useEffect } from "react";
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
      const url =
        "https://scrftc-8000.csb.app/api/roran-williams/blogs/topic/?topic='Health'";
      try {
        const response = await fetch(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNjQ3Mzg3LCJpYXQiOjE3MTEyODczODcsImp0aSI6IjEzYjdjODZkMzA3ZDRhMjViNjQ2NGNkMjEyOWRmNmFhIiwidXNlcl9pZCI6M30.ETT43wWJ-pB3qUH54mR9cyN4guNvQNP1VWH9WrM21NA",
          },
        });
        console.log(url);
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
  }, [props.topic]);

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
          <h1 className="display-4 fst-italic">
            {blog.title} {props.topic}
          </h1>
          <p className="lead my-3">{blog.content}</p>
          <p className="lead mb-0">
            <Link href="#" className="text-body-emphasis fw-bold" passHref>
              Continue reading...
            </Link>
          </p>
        </div>

        <div className="col-lg-6">
          {blog.image && ( // Check if blog.image is not null or undefined
            <Image
              className="rounded img-fluid"
              alt="feature post image"
              src={blog.image}
              width={500}
              height={300}
              onError={(e) => {
                // Handle error if image fails to load
                console.error("Error loading image:", e);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
