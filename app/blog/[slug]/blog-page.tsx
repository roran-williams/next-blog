"use client";
import React from "react";
import ContentRow from "./content-row";
import TitleRow from "./title-row";
import BlogFooter from "./blog-footer";
interface FeaturePostProps {
  topic: string;
}

interface Content {
  firstRow: {
    title: string;
    description: string;
    image: string;
  };
  thirdRow: {
    columnOne: {
      paragraphs: string[];
    };
    columnTwo: {
      paragraphs: string[];
    };
  };
}

const FeaturePost: React.FC<FeaturePostProps> = (props) => {
  return (
    <div>
      <TitleRow />
      <hr />
      <ContentRow />
      <hr />
      <BlogFooter />
    </div>
  );
};

export default FeaturePost;
