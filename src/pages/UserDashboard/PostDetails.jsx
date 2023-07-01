import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import config from "../../firebase.config";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "./PostDetails.css";
import heartOutline from "../../assets/heart_outline.svg";
import double_next from "../../assets/double_next.svg"
import like from "../../assets/like.svg"
import comment from "../../assets/comment.svg"
import unlike from "../../assets/unlike.svg"

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
      <div className="post-navigate">
        <div>All posts</div>
        <img src={double_next} alt="" />
        <div>Post details</div>
      </div>
      
      <div className="post-detail-container">
        <div className="Post-container-left">
          <h2>10 things to imrove your fitness</h2>
          <h6>By: <span>{post?.user?.name}</span></h6>
          <h3>{post.text}</h3>
          {/* <img src={imageURL} alt="Post" /> */}
        
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
            {/* {post.user._id === userId && (
            <button onClick={handleDeletePost}>Delete Post</button>
            )} */}
          </div>
        </div>
      <div className="Post-container-right">
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
      </div>
    </div>
  );
};

export default PostDetails;
