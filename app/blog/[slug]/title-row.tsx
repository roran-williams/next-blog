import React from "react";
import Blogs from "../blogs";
import Image from "next/image";

const TitleRow = () => {
  const { firstRow } = Blogs;
  return (
    <div className="row">
      <div className="col-lg-6 px-0">
        <h1 className="display-4 fst-italic">{firstRow.title}</h1>
        <p className="lead my-3">{firstRow.description}</p>
        <p className="">{"date happened"}</p>
        <p className="lead mb-0"></p>
      </div>
      <div className="col-lg-6 ">
        <Image
          className="rounded img-fluid"
          alt="feature post image"
          src={firstRow.image}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default TitleRow;
