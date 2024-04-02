// Import React and necessary modules
import React from 'react';
import Image from 'next/image';
import BlogAuthors from "@/app/components/blog-authors";
import ReactMarkdown from 'react-markdown';

// Define types for props
type Blog = {
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

type Props = {
  blog: Blog;
};

// Define the component
const ContentRow: React.FC<Props> = ({ blog }) => {
  
  // Function to render paragraphs
  const renderParagraphs = () => {
    if (!blog || !blog.data || !blog.data.attributes || !blog.data.attributes.content)
      return null;

    // Split the content into paragraphs based on newline characters
    const paragraphs = blog.data.attributes.content.split('\n');

    // Filter out empty lines
    const nonEmptyParagraphs = paragraphs.filter(line => line.trim() !== '');

    // Determine the index to split the paragraphs
    const splitIndex = Math.ceil(nonEmptyParagraphs.length / 2);

    // Split the paragraphs into two parts
    const firstColumnParagraphs = nonEmptyParagraphs.slice(0, splitIndex);
    const secondColumnParagraphs = nonEmptyParagraphs.slice(splitIndex);

    // Render the paragraphs in each column
    return (
      <>
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">{blog?.data?.attributes?.title}</h1>
          <p className="lead my-3">{blog.data.attributes.description}</p>
          <p className="">{blog.data.attributes.publishedAt}</p>
          <p className="lead mb-0"></p>
        </div>
        <div className="col-lg-6 ">
          <Image
            className="rounded img-fluid"
            alt="feature post image"
            src={`http://localhost:1337${blog?.data?.attributes?.image?.data?.attributes?.url}`}
            width={500}
            height={300}
          />
        </div>
        <div className="col-lg-6" style={{ borderRight: "1px solid black" }}>
          
          <ReactMarkdown>{firstColumnParagraphs.join('\n')}</ReactMarkdown>
        </div>
        <div className="col-lg-6">
          <ReactMarkdown>{secondColumnParagraphs.join('\n')}</ReactMarkdown>
          
        </div>
      </>
    );
  };

  // Return the rendered component
  return (
    <div className="row">
      {renderParagraphs()}
      <div className="text-end ">
        <b className="">
          <BlogAuthors blog={blog} />
        </b>
        <b className="d-block">date posted: 12/12/2022</b>
      </div>
    </div>
  );
};

// Export the component
export default ContentRow;
