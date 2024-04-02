import ContentRow from "./content-row";
const Blog = ({blog}:any) => {
  return (
    <main className="container">
      <ContentRow blog={blog}/>
      <hr />
    </main>
  );
};

export default Blog;
