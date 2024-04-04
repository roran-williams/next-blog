"use client"
import FeaturePost from "./components/feature-post";
import Card from "./components/cards"
import Article from "./components/article";
// import ArticleNavigation from "./components/article-navigation";
import About from "./components/about";
import Archives from "./components/archives";
import RecentPost from "./components/recent-post";
import SocialMedia from "./components/social-media";

const Blogs = ({ blogs }: any) => {  
  
const today = new Date();
const archives = blogs?.data
  .filter((blog: any) => {
    const publishedDate = new Date(blog.attributes.publishedAt);
    return publishedDate < today; // Compare entire date objects
  })
  .slice(0, 13);

// Extract unique dates
const uniqueDatesSet = new Set(archives.map((blog: any) => new Date(blog.attributes.publishedAt).toDateString()));
const uniqueDates = Array.from(uniqueDatesSet);

// Filter archives to include only blogs with unique dates
const uniqueArchives = archives.filter((blog: any) =>
  uniqueDates.includes(new Date(blog.attributes.publishedAt).toDateString())
);


  const featuredBlog = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking==="featured" ){return blog;};
    }).reverse()[0];
  const cardBlogs = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="card" ){return blog;}
  }).reverse().slice(0,2);
  const articles = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="article" ){return blog;}
  }).reverse();
const arrangedArticles=articles.slice(0,4);
const arrangedRecentPosts = articles.slice(4,7);
return (
    <>
    <main className="container">
  <FeaturePost blog={featuredBlog} />        
    <div className="row mb-2">
    {cardBlogs?.map((blog: any) => (
      <div className="col-md-6" key={blog.id}>
        <Card blog={blog} />
      </div>
    ))}
    </div>
    <div className="row g-5">
          <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehouse</h3>
          <Article blog={arrangedArticles}/>  
          {/* <ArticleNavigation /> */}
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
            <About />
            <h4 className="fst-italic">Recent posts</h4>
            <RecentPost  style="top: 2rem;" blogs={arrangedRecentPosts}/>
            <Archives dates={uniqueDates}/>
            <SocialMedia /> 
            </div>
          </div>
        </div>
    </main>
    </>

  );
};

export default Blogs;
