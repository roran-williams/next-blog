import Blog from "./blog-page";
async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  
  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      {cache:"no-store"}
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.slug);
  return (
  <div >
  <Blog blog={blog} />
  </div>);
}
  

export default BlogPage;
