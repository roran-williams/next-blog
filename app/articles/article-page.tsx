import Article from "@/app/components/article";

const Blogs = ({ blogs }: any) => {    
  const articles = blogs.data.filter((blog: any) => {
    return blog.attributes.ranking ==="article" 
  }).reverse();

return (
    <>
    <main className="container">
    
          <Article blog={articles}/>  
 
    </main>
    </>

  );
};

export default Blogs;
