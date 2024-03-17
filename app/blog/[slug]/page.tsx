import FeaturePost from "@/app/components/feature-post" 

 const Blog = ({ params }: { params: { slug: string } })=> {
  return (<div>
    My Post: {params.slug}
    <FeaturePost topic={params.slug} />
  </div>);
}

export default Blog