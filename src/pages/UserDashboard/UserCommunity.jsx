import React, { useEffect, useState } from "react";
import PostButtons from "./PostButtons";
import config from "../../firebase.config";
import "./UserCommunity.css";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import like from "../../assets/like.svg"
import unlike from "../../assets/unlike.svg"
import comment from "../../assets/comment.svg"
import double_next from "../../assets/double_next.svg"

const PostCategory = ({ category, categoryTitle }) => {
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

  const fetchPosts = async () => {
    const app = initializeApp(config);
    const storage = getStorage(app);

    try {
      const response = await API.get(`/app/post/category/${category}`);
      const categoryPosts = response.data;
      const postsWithImageURLs = await Promise.all(
        categoryPosts.map(async (post) => {
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

  useEffect(() => {
    fetchPosts();
  }, [category]);

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
    <div className={`com-${category}`}>
      <h2>{categoryTitle}</h2>
      <div className={`all-${category}`}>
      {posts.map((post) => (
        <div
          onClick={() => navigate(`/post-details/${post._id}`)}
          key={post._id}
          className={`post-card ${category}-card`}
        > 
          <h2>10 things to imrove your fitness</h2>
          <div className="blog-by">By: {post?.user?.name}</div>
          {/* {post.imageURL && <img className="community-img" src={post.imageURL} alt={category} /> } */}
          <div className="blog-text"><h6>{post.text}</h6></div>
          
          <div className="blog-likecomment">
          <div className="all-post-likes">
            {post.likes?.includes(userId) ? (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleUnlike(post._id); 
                }}
              >
                <img src={unlike} alt="Unlike" />
              </button>
            ) : (
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleLike(post._id);
                }}
              >
                <img src={like} alt="Like" />
              </button>
            )}
            <p>{post.likes?.length}</p>
          </div>
          <div className="all-post-likes">
            <button onClick={() => navigate(`/post-details/${post._id}`)}><img src={comment} alt="Comment" /></button>
            <p>{post.comments?.length}</p>
          </div>
          <button className="view-button" onClick={() => navigate(`/post-details/${post._id}`)} >
            View <img src={double_next} alt="" />
          </button>
          
          {/* <div className="all-posts-comments">
            <h4>Comments:</h4>
            {post?.comments?.map((comment) => (
              <div key={comment._id}>
                <p>{comment.text}</p>
                <p>By: {comment?.user?.name}</p>
              </div>
            ))}
          </div> */}
          {/* <form onSubmit={(event) => handleCommentSubmit(event, post._id)}>
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
          </form> */}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

const UserCommunity = () => {
  return (
    <>
      <div className="community-main">
        <PostButtons />
        <PostCategory category="blog" categoryTitle="Blogs" />
        <PostCategory category="discussion" categoryTitle="Discussions" />
        <PostCategory
          category="transformation"
          categoryTitle="Transformation Stories"
        />
        <PostCategory category="recipe" categoryTitle="Healthy Recipes" />
      </div>
    </>
  );
};

export default UserCommunity;
