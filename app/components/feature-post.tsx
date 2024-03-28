import Link from "next/link";
import Image from "next/image";


export default function FeaturePost({ blog }: any) {
  const imageUrl = "http:localhost:1337/" + blog?.data?.attributes?.image?.data?.attributes?.url
  
  console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
  console.log(imageUrl);
  console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''");

  const truncateBlogDesc =
  blog?.attributes?.description?.length > 80
    ? blog?.attributes?.description?.substring(0, 80) + "..."
    : blog?.attributes?.description;

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">
          {blog?.attributes?.Title}
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
            src={imageUrl}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
