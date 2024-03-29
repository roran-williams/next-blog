import "../globals.css";
import Blogs from "./category-page";

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",{ cache: 'no-store' }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}


const Home = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <main className="container">
          <Blogs blogs={blogs} />
      
      </main>
    </>
  );
};

export default Home;
