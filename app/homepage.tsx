"use client"
import FeaturePost from "./components/feature-post";
import Card from "./components/cards"
import Article from "./components/article";
import ArticleNavigation from "./components/article-navigation";
import About from "./components/about";
import Archives from "./components/archives";
import RecentPost from "./components/recent-post";
import SocialMedia from "./components/social-media";

const Blogs = ({ blogs }: any) => {

  const featuredBlogIds:any = [];
  const featuredBlogs = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking==="featured" ){
      featuredBlogIds.push(blog.id);
    return blog;
    };
    });
  const featuredBlogLatestId = featuredBlogIds.reduce((accumulator:number,currentId:number)=>{
      if (currentId>accumulator){
        return currentId;
      }
  });
  const LatestFeaturedBlog = featuredBlogs.filter((blog:any)=>{
    if (blog.id===featuredBlogLatestId){
      return blog;
    }
  })[0];



  const cardBlogIds:any = [];      
  const cardBlogs = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="card" ){
      cardBlogIds.push(blog.id)
      return blog;
    }
  });
const cardBlogLatestId = cardBlogIds.reduce((accumulator:number,currentId:number)=>{
    if (currentId>accumulator){
      return currentId;
    }
});

const latestCardIndex = cardBlogIds.findIndex((index:any)=>{
  return index === cardBlogLatestId;
}) 
const LatestCardBlog = cardBlogs.filter((blog:any)=>{
  const cardTwoId = cardBlogIds.find((card:any)=>{
    return card === cardBlogIds[latestCardIndex-1];
  })
  if ((blog.id===cardBlogLatestId ) || (blog.id===cardTwoId)){
    return blog;
  }
});

const arrangedLatestCardBlog:any =[]
let x = 1;
while( x>=0){
  arrangedLatestCardBlog.push(LatestCardBlog[x]);
  x--;
}
console.log(arrangedLatestCardBlog)

  const articleIds:any = [];      
  const articles = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="article" ){
      articleIds.push(blog.id)
      return blog;
    }
  });
  const latestArticleId = articleIds.reduce((accumulator:number,currentId:number)=>{
    if (currentId>accumulator){
      return currentId;
    }
});
const latestArticleIndex = articleIds.findIndex((index:any)=>{
  return index === latestArticleId;
}) 

const arrangedArticles=[]
let i = latestArticleIndex;
while( i>=0 && arrangedArticles.length<=4){
  arrangedArticles.push(articles[i]);
  i--;
}


const  recentPost=[]
let y=arrangedArticles.length+1;
while( y>arrangedArticles.length && recentPost.length<=2){
  recentPost.push(articles[y]);
  y++;
}

const arrangedRecentPost:any = []
let a = recentPost.length-1;
while( a>=0){
  arrangedRecentPost.push(recentPost[a]);
  a--;
}
 

  return (
    <>
    <main className="container">
     
  <FeaturePost blog={LatestFeaturedBlog} />
        
    <div className="row mb-2">
    {arrangedLatestCardBlog?.map((blog: any) => (
      <div className="col-md-6" key={blog.id}>
        <Card blog={blog} />
      </div>
    ))}
    </div>
    <div className="row g-5">
          <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehouse</h3>
          <Article blog={arrangedArticles}/>  
          <ArticleNavigation />
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
            <About />
            <h4 className="fst-italic">Recent posts</h4>
            <RecentPost blogs={arrangedRecentPost}/>
            <Archives />
            <SocialMedia /> 

            </div>
          </div>
        </div>
    </main>
    </>

  );
};

export default Blogs;
