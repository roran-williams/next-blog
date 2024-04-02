import Image from "next/image";

const TitleRow = ({blog}:any) => {
  console.log("title row",blog);
  return (
    <div className="row">
      <div className="col-lg-6 px-0">
        <h1 className="display-4 fst-italic">{blog?.data?.atributes?.title}</h1>
        <p className="lead my-3">{blog?.data?.attributes?.description?.substring(0,600)}</p>
        <p className="">{new Date(blog?.data?.attributes?.publishedAt).toLocaleString()}</p>
        <p className="lead mb-0"></p>
      </div>
      <div className="col-lg-6 ">
        <Image
          className="rounded img-fluid"
          alt="feature post image"
          src={`http://localhost:1337${blog?.data?.attributes?.image?.data?.attributes?.url}`}
          //src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}

          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default TitleRow;
