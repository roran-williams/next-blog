import Link from "next/link";

 const Article = ({ blog }: any) => {
    
  return blog.map((article:any) => (
    <article className="blog-post" key={article?.id}>
      <h2 className="display-5 link-body-emphasis mb-1">{article?.attributes?.title}</h2>
      <div className="blog-post-meta">
       {"date posted"} {new Date(article?.attributes?.publishedAt).toLocaleString()}        
      </div> 
       
      {"authors :"}<Link href="#">{article?.attributes.authors.data[0]?.attributes?.name}</Link>
       
      <p>{article?.attributes?.description?.substring(0, 600) + "..."}</p>

    </article>
  ));
}

export default Article