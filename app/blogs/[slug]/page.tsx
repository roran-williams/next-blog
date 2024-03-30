import Image from "next/image";
import Link from "next/link";
import React from "react";

async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      {cache:"no-store"}
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.slug);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/">{"< Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image 
        src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}
        width={100}
        height={100}
        alt={""} />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">{blog.data.attributes.title}</h1>
        <p className="text-gray-600 mt-2">{blog.data.attributes.description}</p>
        <div className="mt-4 flex items-center text-gray-400">
          <span className="text-sm">
            Published on{" "}
            {new Date(blog.data.attributes.publishedAt).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
