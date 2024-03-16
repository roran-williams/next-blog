import React from "react";
import { FeaturedPosts } from "./blogs";
import Link from "next/link";
import Image from "next/image"
export default function FeaturePost() {
  return (
    <div>
      <h1 className="text-4xl font-italic">{FeaturedPosts.Title}</h1>
      <p className="text-lg my-3">{FeaturedPosts.content}</p>
      <p className="text-lg mb-0">
        <Link href="#" className="text-blue-500 font-bold">
          Continue reading...
        </Link>
      </p>
    </div>
  );
}

export function FeaturePostImage() {
    return <Image className="rounded" alt="feature post image" src={FeaturedPosts.image} width={500} height={300} />;
  }