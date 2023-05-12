import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import UserDashNav from "./UserDashNav";
import "./CategoryPage.css";
import config from "../../firebase.config";
import PostButtons from "./PostButtons";

const CategoryPage = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Initialize Firebase app
    const app = initializeApp(config);

    // Create a Firebase Storage reference
    const storage = getStorage(app);

    // Fetch posts for the selected category from the backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/app/post/category/${category}`
        );
        const postsData = response.data;

        // Retrieve the image URLs from Firebase Storage for each post
        const postsWithImageURLs = await Promise.all(
          postsData.map(async (post) => {
            const imageURL = await getDownloadURL(ref(storage, post.image));
            return { ...post, imageURL };
          })
        );

        setPosts(postsWithImageURLs);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <>
      <UserDashNav />
      <div className="category-main">
        <PostButtons />
        <h2>{category} Posts</h2>
        {posts.map((post) => (
          <div key={post._id}>
            <h3>{post.text}</h3>
            <img src={post.imageURL} alt="post" />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
