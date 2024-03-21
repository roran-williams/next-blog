import FeaturePost from "./blog-page";

const Blog = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <div>{params.slug}</div>
          <FeaturePost topic={params.slug} />
        </div>
      </main>
    </div>
  );
};

export default Blog;
