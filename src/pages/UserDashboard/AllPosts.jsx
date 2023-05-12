import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import config from "../../firebase.config";
import UserDashNav from './UserDashNav';
import PostButtons from "./PostButtons";
import './AllPosts.css'

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
      appId: config.appId,
      measurementId: config.measurementId
  };
  const app = initializeApp(firebaseConfig);

  // Create a Firebase Storage reference
  const storage = getStorage(app);
    try {
      const response = await axios.get('http://localhost:3001/app/post/all');
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
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <UserDashNav />
      <div className='all-main'>
        <PostButtons/>
      <h2>All Posts</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <h3>{post.category}</h3>
            <p>{post.text}</p>
            <img src={post.imageURL} alt="Post" />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AllPosts;
