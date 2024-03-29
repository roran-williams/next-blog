import Link from "next/link";
import Image from "next/image";


export default function FeaturePost({ blog }: any) {
  const imageUrl = "http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"
  
  console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
  console.log(imageUrl);
  console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''");

  const truncateBlogDesc =
  blog?.attributes?.description?.length > 200
    ? blog?.attributes?.description?.substring(0, 200) + "..."
    : blog?.attributes?.description;

  return (
    <div>
      <div className="row">
        
        <div className="col-lg-6 px-0">
      <div className="text-sm "> {blog?.attributes?.topics?.data[0]?.attributes?.name} </div>

          <h1 className="display-4 fst-italic">
          {blog?.attributes?.title}
          </h1>
          <p className="lead my-3">{truncateBlogDesc}</p>
          <p className="lead mb-0">
            <Link href={`/blogs/${blog?.id}`} className="text-body-emphasis fw-bold">
              Continue reading...
            </Link>
          </p>
        </div>

        <div className="col-lg-6 ">
          <Image
            className="rounded img-fluid"
            alt="feature post image"
            src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
