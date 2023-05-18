import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import plus from "../../assets/plus.svg";
import axios from "axios";
import "./PostButtons.css";

const PostButtons = () => {
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [category, setCategory] = useState("discussion");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleAddPost = async () => {
    // Implement the logic to add the post using the entered values
    // Make an API request to submit the form data (e.g., using axios)
    // Include the selected category, text, and image in the request
    // Reset the form fields and close the modal
    try {
      const formData = new FormData();
      formData.append("category", category);
      formData.append("text", text);
      if (image) {
        formData.append("image", image);
      }

      const API = axios.create({ baseURL: "http://localhost:3001" });

      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
            req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
        }
    
        return req;
    });
      await API.post("/app/post/add", formData);

      setCategory("discussion");
      setText("");
      setImage(null);
      setShowAddPostModal(false);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleCategoryClick = (category) => {
    // Navigate to the corresponding page based on the category
    navigate(`/posts/${category}`);
  };

  return (
    <div>
      <div className="add-btn">
        <button className="add-post" onClick={() => setShowAddPostModal(true)}>
          {" "}
          <img src={plus} alt="" /> Add Post
        </button>
      </div>
      <div className="com-filters">
        <button className="filtr" onClick={() => handleCategoryClick("all")}>
          All
        </button>
        <button className="filtr" onClick={() => handleCategoryClick("blog")}>
          Blogs
        </button>
        <button
          className="filtr"
          onClick={() => handleCategoryClick("discussion")}
        >
          Discussions
        </button>
        <button
          className="filtr"
          onClick={() => handleCategoryClick("transformation")}
        >
          Transformations
        </button>
        <button className="filtr" onClick={() => handleCategoryClick("recipe")}>
          Recipes
        </button>
      </div>
      {showAddPostModal && (
        <div className="modal-overlay">
          <div className="add-post-modal">
            <h2>Add Post</h2>
            <form>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="discussion">Discussion</option>
                  <option value="recipe">Recipe</option>
                  <option value="transformation">Transformation</option>
                  <option value="blog">Blog</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="text">Text:</label>
                <textarea
                  id="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  accept="image/*"
                />
              </div>
              <button type="button" onClick={handleAddPost}>
                Add Post
              </button>
              <button type="button" onClick={() => setShowAddPostModal(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostButtons;
