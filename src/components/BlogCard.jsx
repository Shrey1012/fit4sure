import React from "react";
import "./BlogCard.css";

const BlogCard = ({ image, heading, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-top">
        <img alt="blog-pic" src={image}></img>
      </div>
      <div className="blog-card-bottom">
        <div className="blog-card-heading">{heading}</div>
        <div className="blog-card-para">{description}</div>
      </div>
    </div>
  );
};

export default BlogCard;
