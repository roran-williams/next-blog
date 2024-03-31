import Image from "next/image";

const TitleRow = ({blog}:any) => {
  console.log(blog);
  return (
    <div className="row">
      <div className="col-lg-6 px-0">
        <h1 className="display-4 fst-italic">{blog?.atributes?.title}</h1>
        <p className="lead my-3">{blog?.attributes?.description}</p>
        <p className="">{new Date(blog?.attributes?.publishedAt).toLocaleString()}</p>
        <p className="lead mb-0"></p>
      </div>
      <div className="col-lg-6 ">
        <Image
          className="rounded img-fluid"
          alt="feature post image"
          src={blog?.attributes?.image?.data?.attributes?.url}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default TitleRow;
