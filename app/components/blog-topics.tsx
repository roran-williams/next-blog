import Link from "next/link";

const BlogTopics = ({ blog }: any) =>{
    const topics = blog?.attributes?.topics?.data?.map((topic: any) => {
    return <Link 
    href={`/categories/${topic?.attributes?.name}`} 
    className="d-inline-block pd-1 m-1 text-dark "
    style = {{textDecoration:"none"}}
    key={topic.id}> {topic?.attributes?.name} | 
     </Link>;
  }).slice(0,4);
  return <div className="text-sm active">{topics}</div>

}

export default BlogTopics;