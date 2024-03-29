import Image from "next/image";
import Link from "next/link";

const RecentPost = ({blogs}:any) => {
  return (
    <ul className="list-unstyled">
      {blogs.map((blog:any) => (
        <li key={blog?.id}>
          <Link
            className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
            href="#"
          >
            <Image
              className="bd-placeholder-img"
              width={100}
              height="96"
              src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}
              alt={`Nature Image ${blog?.id}`}
            />
            <div className="col-lg-8">
              <h6 className="mb-0">{blog?.attributes?.title}</h6>
              <small className="text-body-secondary">{new Date(blog?.attributes?.publishedAt).toLocaleString()}</small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}


export default RecentPost;