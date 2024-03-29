import React, { useEffect, useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import config from "../../firebase.config";
import UserDashNav from "./UserDashNav";
import PostButtons from "./PostButtons";
import { useNavigate } from "react-router-dom";
import "./AllPosts.css";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState("");

  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("profile")).result._id;

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    // Initialize Firebase app
    const app = initializeApp(config);

    // Create a Firebase Storage reference
    const storage = getStorage(app);
    try {
      const response = await API.get("/app/post/all");
      const postsData = response.data;

      // Retrieve the image URLs from Firebase Storage for each post
      const postsWithImageURLs = await Promise.all(
        postsData.map(async (post) => {
          if(!post.image) return post;
          const imageURL = await getDownloadURL(ref(storage, post.image));
          return { ...post, imageURL };
        })
      );

      const sortedPosts = postsWithImageURLs.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      setPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLike = async (postId) => {
    try {
      await API.post(`/app/post/${postId}/like`);
      fetchPosts(); // Refresh the posts after liking
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await API.post(`/app/post/${postId}/unlike`);
      fetchPosts(); // Refresh the posts after unliking
    } catch (error) {
      console.error("Error unliking the post:", error);
    }
  };

  const handleCommentSubmit = async (event, postId) => {
    event.preventDefault();

    try {
      await API.post(`/app/post/${postId}/comment`, {
        comment: commentText,
      });

      setCommentText("");

      fetchPosts();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <>
      <UserDashNav />
      <div className="all-main">
        <PostButtons />
        <h2>All Posts</h2>
        <div className="post-list">
          {posts.map((post) => (
            <div
              onClick={() => navigate(`/post-details/${post._id}`)}
              className="post"
              key={post._id}
            >
              <h3>{post.category}</h3>
              <p>{post.text}</p>
              {post.imageURL && <img src={post.imageURL} alt="Post" />}
              <h6>By: {post?.user?.name}</h6>
              <div className="all-post-likes">
                <p>{post.likes?.length} likes</p>
                {post.likes?.includes(userId) ? (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleUnlike(post._id);
                    }}
                  >
                    Unlike
                  </button>
                ) : (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleLike(post._id);
                    }}
                  >
                    Like
                  </button>
                )}
              </div>
              <div className="all-posts-comments">
                <h4>Comments:</h4>
                {post?.comments?.map((comment) => (
                  <div key={comment._id}>
                    <p>{comment.text}</p>
                    <p>By: {comment?.user?.name}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={(event) => handleCommentSubmit(event, post._id)}>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={commentText}
                  onClick={(event) => event.stopPropagation()}
                  onChange={(event) => {
                    setCommentText(event.target.value);
                  }}
                />
                <button onClick={(e) => e.stopPropagation()} type="submit">
                  Submit
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
