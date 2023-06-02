import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import config from "../../firebase.config";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./PostDetails.css";
import heartOutline from "../../assets/heart_outline.svg";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [imageURL, setImageURL] = useState("");
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
    fetchPostDetails();
  }, [postId]);

  const fetchPostDetails = async () => {
    const app = initializeApp(config);
    const storage = getStorage(app);
    try {
      const response = await API.get(`/app/post/${postId}`);
      const postData = response.data;
      setPost(postData);

      const imageURL = await getDownloadURL(ref(storage, postData.image));
      setImageURL(imageURL);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  const handleLike = async () => {
    try {
      await API.post(`/app/post/${postId}/like`);

      fetchPostDetails();
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const handleUnlike = async () => {
    try {
      await API.post(`/app/post/${postId}/unlike`);

      fetchPostDetails();
    } catch (error) {
      console.error("Error unliking the post:", error);
    }
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    try {
      await API.post(`/app/post/${postId}/comment`, {
        comment: commentText,
      });

      setCommentText("");

      fetchPostDetails();
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleDeletePost = async () => {
    try {
      await API.delete(`/app/post/${postId}`);

      navigate("/usercommunity");

      
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail-main">
      <h2>Post Details</h2>
      <h3>{post.text}</h3>
      <img src={imageURL} alt="Post" />
      <h6>By: {post?.user?.name}</h6>
      {post.user._id === userId && (
        <button onClick={handleDeletePost}>Delete Post</button>
      )}
      <div className="post-detail-likes">
        <p>{post.likes?.length}</p>
        {post.likes?.includes(userId) ? (
          <button onClick={handleUnlike}>Unlike</button>
        ) : (
          <button onClick={handleLike}>Like</button>
        )}
      </div>
      <div className="post-detail-comments">
        <h4>Comments:</h4>
        {post?.comments?.map((comment) => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            <p>By: {comment?.user?.name}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostDetails;