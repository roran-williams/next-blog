const BlogAuthors = ({blog}:any)=>{
const authors = blog?.attributes?.authors?.data?.map((author: any) => {
    return <span 
    className="d-inline-block pd-1 m-1 text-normal "
     key={author.id}> | {author?.attributes?.name} | </span>;
  });
   return <div className="text-sm active">authors : [{authors}]</div>
}

export default BlogAuthors;