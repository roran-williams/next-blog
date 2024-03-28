import Link from "next/link";
// import Image from "next/image";

export default function FeaturePost({ blog }: any) {
  // console.log(blog)

  const truncateBlogDesc =
  blog?.attributes?.Description?.length > 80
    ? blog?.attributes?.Description?.substring(0, 80) + "..."
    : blog?.attributes?.Description;

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">
          {blog?.attributes?.Title}
          </h1>
          <p className="lead my-3">{truncateBlogDesc}</p>
          <p className="lead mb-0">
            <Link href={`/blog/${blog?.id}`} className="text-body-emphasis fw-bold">
              Continue reading...
            </Link>
          </p>
        </div>

        <div className="col-lg-6 ">
          {/* <Image
            className="rounded img-fluid"
            alt="feature post image"
            src={`http:localhost:1337/${blog?.data?.attributes?.img?.data?.attributes?.url}`}
            width={500}
            height={300}
          /> */}
        </div>
      </div>
    </div>
  );
}
