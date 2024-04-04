// Import React and necessary modules
import React from 'react';
import Image from 'next/image';
import BlogAuthors from "@/app/components/blog-authors";
import ReactMarkdown from 'react-markdown';

// Define types for props
type Blog = {
  blog?:{
    data?: {
      attributes?: {
        title?: string;
        description?: string;
        content?: string;
        publishedAt?: string;
        image?: {
          data?: {
            attributes?: {
              url?: string;
            };
          };
        };
      };
    };
  };
};

// type Props = {
//   blog: Blog;
// };

// Define the component
const ContentRow = ({blog}:Blog) => {
  const paragraphs = blog?.data?.attributes?.content?.split("\n")

    return (
      <>
      <div className='row'>
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">{blog?.data?.attributes?.title}</h1>
          <p className="lead my-3">{blog?.data?.attributes?.description}</p>
          <p className="">{blog?.data?.attributes?.publishedAt}</p>
          <p className="lead mb-0"></p>
        </div>
        <div className="col-lg-6 ">
        <div className='mt-5' style={{ width: '600px', height: '250px' }}>
          <Image
            className="rounded img-fluid center mt-5 image-container"
            alt="feature post image"
            src={`http://localhost:1337${blog?.data?.attributes?.image?.data?.attributes?.url}`}
            width={600}
            height={450}
            priority
          />
          </div>
        </div>
        </div>
          <ReactMarkdown className="lead my-3">
          {blog?.data?.attributes?.content}
          </ReactMarkdown>
       
      </>
    );
  };

// Export the component
export default ContentRow;
