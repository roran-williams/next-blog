import FeaturePost from "../../components/feature-post";

const Home = () => {
  return (
    <>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <FeaturePost topic="Home" />
        </div>
      </main>
    </>
  );
};

export default Home;
