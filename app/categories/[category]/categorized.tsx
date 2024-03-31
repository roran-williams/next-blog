"use client";
import React, { useContext } from "react";
import FeaturePost from "@/app/components/feature-post";
import Card from "@/app/components/cards"
import Article from "@/app/components/article";
import ArticleNavigation from "@/app/components/article-navigation";
import About from "@/app/components/about";
import Archives from "@/app/components/archives";
import RecentPost from "@/app/components/recent-post";
import { TopicContext } from "@/context/TopicContext";
import SocialMedia from "@/app/components/social-media";
import { DateContext } from "@/context/DateContext";

const Blogs = ({ blogs }:any) => {
  const { topic } = useContext(TopicContext);
  const { date } = useContext(DateContext);
  console.log(blogs);

  const today = new Date();
  const filteredBlogs = blogs.data.filter((blog:any) => {
    const publishedDate = new Date(blog.attributes.publishedAt);
    console.log("pub date",publishedDate);
    return publishedDate < today;
  });

  console.log("filtered blogs",filteredBlogs);

  const archives = filteredBlogs.slice(0, 13);
  console.log("archives",archives);

  const uniqueDatesSet = new Set(filteredBlogs.map((blog:any) => new Date(blog.attributes.publishedAt).toDateString()));
  const uniqueDates = Array.from(uniqueDatesSet);

  const blogsByDate = blogs.data.filter((blog:any) => {
    const blogDate = new Date(blog.attributes.publishedAt).toDateString();
    console.log("blog date",blogDate)
    return blogDate === date || uniqueDates.includes(blogDate);
}).reverse();

console.log("blogs by date",blogsByDate);


  const featuredBlogs = blogsByDate.find((blog:any) => {
    return blog.attributes.ranking === "featured" && blog.attributes.topics.data.some((topik:any) => topik.attributes.name.toLowerCase() === topic.toLowerCase());
  });

console.log("featured blog",featuredBlogs);

  const cards = blogsByDate.filter((blog:any) => {
    return blog.attributes.ranking === "card" && blog.attributes.topics.data.some((topik:any) => topik.attributes.name.toLowerCase() === topic.toLowerCase());
  }).slice(0, 2);
  
console.log("card blog",cards);

  const articles = blogsByDate.filter((blog:any) => {
    return blog.attributes.ranking === "article" && blog.attributes.topics.data.some((topik:any) => topik.attributes.name.toLowerCase() === topic.toLowerCase());
  });
console.log("atricle",articles);

  const arrangedArticles = articles.slice(0, 4);
console.log("arr article",arrangedArticles);

  const arrangedRecentPosts = articles.slice(4, 7);
console.log("recent",arrangedRecentPosts);

  return (
    <main className="container">
      <FeaturePost blog={featuredBlogs} />
      <div className="row mb-2">
        {cards.map((blog:any) => (
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
            <RecentPost blogs={arrangedRecentPosts}/>
            <Archives dates={uniqueDates}/>
            <SocialMedia /> 
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blogs;
