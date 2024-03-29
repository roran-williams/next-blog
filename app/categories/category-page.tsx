"use client"
import React, { useContext } from "react";
import FeaturePost from "../components/feature-post";
import Card from "../components/cards"
import Article from "../components/article";
import ArticleNavigation from "../components/article-navigation";
import About from "../components/about";
import Archives from "../components/archives";
import RecentPost from "../components/recent-post";
import { TopicContext } from "@/context/TopicContext";
import SocialMedia from "../components/social-media";

const Blogs = ({ blogs }: any) => {
  const { topic } = useContext(TopicContext);

  const featuredBlogs = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking==="featured" ){
        return blog.attributes.topics?.data.some((topik: any) => {
          return topik.attributes.name.toLowerCase() === topic?.toLowerCase();
      });}
  });

  const cards = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="card" ){
        return blog.attributes.topics?.data.some((topik: any) => {
          return topik.attributes.name.toLowerCase() === topic?.toLowerCase();
      });}
  });
  
  const articles = blogs.data.filter((blog: any) => {
    if (blog.attributes.ranking ==="article" ){
        return blog.attributes.topics?.data.some((topik: any) => {
          return topik.attributes.name.toLowerCase() === topic?.toLowerCase();
      });}
  });

  const recentPost = blogs.data.filter((blog: any,index:any) => {
    if (index<3){
        return blog.attributes.topics?.data.some((topik: any) => {
          return topik.attributes.name.toLowerCase() === topic?.toLowerCase();
      });}
  });
  return (
    <>
    <main className="container">
      {featuredBlogs?.map((blog: any) => (
        <div key={blog.id}>
          <FeaturePost blog={blog} />
        </div>
      ))}
      

    <div className="row mb-2">
    {cards?.map((blog: any) => (
      <div className="col-md-6" key={blog.id}>
        <Card blog={blog} />
      </div>
    ))}
    </div>
    <div className="row g-5">
          <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehouse</h3>
          <Article blog={articles}/>  
          <ArticleNavigation />
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
            <About />
            <h4 className="fst-italic">Recent posts</h4>
            <RecentPost blogs={recentPost}/>
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
