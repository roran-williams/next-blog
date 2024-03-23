import FeaturePost from "../../blog-page";

const Blog = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <div>{params.id}</div>
          <FeaturePost topic={params.id} />
        </div>
      </main>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <div>{params.id}</div>
          <FeaturePost topic={params.id} />
        </div>
      </main>
    </div>
  );
};

export default Blog;
