import ContentRow from "./content-row";
import TitleRow from "./title-row";
import BlogFooter from "./blog-footer";

const Blog = ({blog}:any) => {
  return (
    <div>
      <TitleRow blog={blog}/>
      <hr />
      <ContentRow />
      <hr />
      <BlogFooter />
    </div>
  );
};

export default Blog;
