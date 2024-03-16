import './globals.css';
import BlogComponent from "./components/blog";
import FeaturePost, { FeaturePostImage } from './components/feature-post';


const Home = () => {
  return(
    <>
    <h1 className="text-6xl font-bold underline">Home page</h1>
    <main className="container">
  <div className="p-4 md:p-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
    <div className="grid md:grid-cols-2 gap-4">
      <div className="px-0">
        <FeaturePost />
      </div>
      <div>
        <FeaturePostImage />
      </div>
    </div>
  </div>
</main>

    <BlogComponent />

    </>
  )
}

export default Home;