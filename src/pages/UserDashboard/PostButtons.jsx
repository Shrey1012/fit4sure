import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import plus from "../../assets/plus.svg";
import axios from "axios";
import "./PostButtons.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostButtons = () => {
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [category, setCategory] = useState("discussion");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    try {
      e.preventDefault();

      console.log(image);

      const formData = new FormData();
      formData.append("text", text);
      formData.append("category", category);
      for(let pair of formData.entries()){
        console.log(pair[0]+ ', '+ pair[1]);
      };
      formData.append("image", image);
      for(let pair of formData.entries()){
        console.log(pair[0]+ ', '+ pair[1]);
      };



      const API = axios.create({ baseURL: "http://localhost:3001" });

      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
          }`;
        }

        return req;
      });
      await API.post("/app/post/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Post added successfully!",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });


      setCategory("discussion");
      setText("");
      setImage(null);
      setShowAddPostModal(false);
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Error adding post!, Please try again",{
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/posts/${category}`);
  };

  return (
    <div className="Post-buttons">
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
            <form onSubmit={handleAddPost} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  name="category"
                  className="form-control"
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
                  name="text"
                  className="form-control"
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
                  name="image"
                  className="form-control"
                  type="file"
                  id="image"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  accept="image/*"
                />
              </div>
              <button type="submit">
                Add Post
              </button>
              <button className="close-btn" type="button" onClick={() => setShowAddPostModal(false)}>
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostButtons;
