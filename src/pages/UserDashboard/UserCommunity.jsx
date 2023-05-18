import React, { useState, useEffect } from "react";
import UserDashNav from "./UserDashNav";
import "./UserCommunity.css";
import blog1 from "../../assets/blog1.png";
import heart_outline from "../../assets/heart_outline.svg";
import comment_outline from "../../assets/comment_outline.svg";
import PostButtons from "./PostButtons";
import config from "../../firebase.config";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import axios from "axios";

const UserCommunity = () => {
  const [blogs, setBlogs] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [transformations, setTransformations] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Initialize Firebase app
    const app = initializeApp(config);

    // Create a Firebase Storage reference
    const storage = getStorage(app);

    // Fetch posts for each category from the backend
    const fetchPosts = async () => {
      try {

        //BLOGS
        const responseBlog = await axios.get(
          "http://localhost:3001/app/post/category/blog"
        );
        const blogs = responseBlog.data;
        // Retrieve the image URLs from Firebase Storage for each post
        const blogsWithImageURLs = await Promise.all(
          blogs.map(async (post) => {
            const imageURL = await getDownloadURL(ref(storage, post.image));
            return { ...post, imageURL };
          })
        );

        setBlogs(blogsWithImageURLs);


        //DISCUSSIONS
        const responseDiscussion = await axios.get(
          "http://localhost:3001/app/post/category/discussion"
        );
        const discussions = responseDiscussion.data;
        // Retrieve the image URLs from Firebase Storage for each post
        const discussionsWithImageURLs = await Promise.all(
          discussions.map(async (post) => {
            const imageURL = await getDownloadURL(ref(storage, post.image));
            return { ...post, imageURL };
          })
        );

        setDiscussions(discussionsWithImageURLs);


        //TRANSFORMATIONS
        const responseTransformation = await axios.get(
          "http://localhost:3001/app/post/category/transformation"
        );
        const transformations = responseTransformation.data;
        // Retrieve the image URLs from Firebase Storage for each post
        const transformationsWithImageURLs = await Promise.all(
          transformations.map(async (post) => {
            const imageURL = await getDownloadURL(ref(storage, post.image));
            return { ...post, imageURL };
          })
        );

        setTransformations(transformationsWithImageURLs);


        //RECIPES
        const responseRecipe = await axios.get(
          "http://localhost:3001/app/post/category/recipe"
        );
        const recipes = responseRecipe.data;
        // Retrieve the image URLs from Firebase Storage for each post
        const recipesWithImageURLs = await Promise.all(
          recipes.map(async (post) => {
            const imageURL = await getDownloadURL(ref(storage, post.image));
            return { ...post, imageURL };
          })
        );
        setRecipes(recipesWithImageURLs);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="community-main">
        <PostButtons />
        <div className="com-blogs">
          <h3>Blogs</h3>
          {/* <div className="blog-card">
            <img src={blog1} alt="blog" />
            <h3>Manage your workout</h3>
            <p>
              Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id
              omnis omnis. Et fuga...
            </p>
            <button>Know more</button> */}
          {blogs.map((post) => (
            <div key={post._id} className="blog-card">
              <img src={post.imageURL} alt="blog" />
              <h3>{post.text}</h3>
            </div>
          ))}
        </div>
        <div className="com-discussions">
          <h2>Discussions</h2>
          {/* <div className="discussion-card">
            <h3>Is it easy to manage routinr?</h3>
            <p>
              Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id
              omnis omnis.quibusdam est rerum quis id omnis omnis Et fuga...
            </p>
            <button>
              <img src={heart_outline} alt="" />
            </button>
            <button>
              <img src={comment_outline} alt="" />
            </button>
          </div> */}
          {discussions.map((post) => (
            <div key={post._id} className="discussion-card">
              <h3>{post.text}</h3>
              <img src={post.imageURL} alt="discussion" />
            </div>
          ))}
        </div>
        <div className="com-transformations">
          <h2>Transformation stories</h2>
          {/*
          <div className="trans-card">
            <img src={blog1} alt="blog" />
            <h3>Niyati(itne years old - dhandha)</h3>
            <p>
              Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id
              omnis omnis. Et fuga...
            </p>
            <button>Know more</button>
          </div> */}
          {transformations.map((post) => (
            <div key={post._id} className="transformation-card">
              <h3>{post.text}</h3>
              <img src={post.imageURL} alt="transformation" />
            </div>
          ))}
        </div>
        <div className="com-recipes">
          <h2>Healthy recipes</h2>
          {/* <div className="recipe-card">
            <img src={blog1} alt="blog" />
            <h3>Recipe name</h3>
            <p>
              Lorem ipsum dolor sit amet. Et rerum quibusdam est rerum quis id
              omnis omnis. Et fuga...
            </p>
            <button>Read</button>
            <button>
              <img src={heart_outline} alt="" />
            </button>
          </div> */}
          {recipes.map((post) => (
            <div key={post._id} className="recipe-card">
              <h3>{post.text}</h3>
              <img src={post.imageURL} alt="recipe" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserCommunity;
