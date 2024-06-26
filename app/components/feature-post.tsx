import Link from "next/link";
import Image from "next/image";
import BlogTopics from "./blog-topics";
import BlogAuthors from "./blog-authors";

export default function FeaturePost({ blog }: any) {
 
  return (
    <div className="row">
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="row">
          <div className="col-lg-6 px-0">
            <BlogTopics blog={blog}/>
            <h1 className="display-4 fst-italic">{blog?.attributes?.title}</h1>
            <p className="lead my-3">{blog?.attributes?.description?.substring(0, 400) + "..."}</p>
            <p className="lead mb-0">
              <Link href={`/blogs/${blog?.id}`} className="text-body-emphasis fw-bold">
                Continue reading...
              </Link>
            </p>
          </div>

          <div className="col-lg-6">
            <Image
              className="rounded img-fluid"
              alt="feature post image"
              src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}
              width={500}
              height={300}
            />
            <div className="mt-4 text-end text-sm">
              Published on:{" "}
              {new Date(blog?.attributes?.publishedAt).toLocaleString()}
              <BlogAuthors blog={blog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
