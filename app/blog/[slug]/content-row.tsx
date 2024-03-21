import React from "react";
import Blogs from "../blogs";

const ContentRow = () => {
  const { thirdRow } = Blogs;

  return (
    <div className="row">
      <div className="col-lg-6 " style={{ borderRight: "1px solid black" }}>
        {thirdRow.columnOne.paragraphs.map((paragraph, index) => (
          <p key={index} className="lead my-3">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="col-lg-6 ">
        {thirdRow.columnTwo.paragraphs.map((paragraph, index) => (
          <p key={index} className="lead my-3">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
