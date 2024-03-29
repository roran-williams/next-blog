import Image from "next/image";
import Link from "next/link";

const Card=({blog}:any)=> {

    const truncateBlogDesc =
  blog?.attributes?.description?.length > 20
    ? blog?.attributes?.description?.substring(0, 20) + "..."
    : blog?.attributes?.description;


  return (
    <div>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                {blog?.attributes?.topics?.data[0]?.attributes?.name}
                </strong>
                <h3 className="mb-0">{blog?.atributes?.title}</h3>
                <div className="mb-1 text-body-secondary">{new Date(blog?.attributes?.publishedAt).toLocaleString()}</div>
                <p className="card-text mb-auto">{truncateBlogDesc}</p>
                <Link
                  href="#"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg className="bi">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </Link>
              </div>
              <div className="col-auto">
                <Image
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src={blog?.attributes?.image?.data?.attributes?.url?`http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`:"http://127.0.0.1:1337/uploads/premium_photo_1663013618856_bb1036f6b95d_99f9362788.jpeg"}
                  alt={"Card Image"}
                />
              </div>
              
            </div>
          </div>
  );
}

export default Card;
