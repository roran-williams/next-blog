import Link from "next/link";
import BlogTopics from "./blog-topics";
import BlogAuthors from "./blog-authors";

 const Article = ({ blog }: any) => {  
  return blog.map((article:any) => (
    <article className="blog-post" key={article?.id}>
      <h2 className="display-5 link-body-emphasis mb-1">{article?.attributes?.title}</h2>
      <div className="blog-post-meta">
       {"date posted"} {new Date(article?.attributes?.publishedAt).toLocaleString()}        
      </div> 
       <BlogTopics blog={article} />
      <div className="text-sm active">
        <BlogAuthors blog={article} />
      </div>
      
      <p>{article?.attributes?.description?.substring(0, 600) + "..."}</p>

    </article>
  ));
}

export default Article