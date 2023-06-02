import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./PersonalDetails.css";
import profile from "../../../assets/profile.svg";
import edit from "../../../assets/edit.svg";
import check from "../../../assets/check.svg";

const PersonalDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    image: "",
    email: "",
    contactNumber: "",
    dateOfBirth: "",
    stateOfResidence: "",
  });

  const [formattedDateOfBirth, setFormattedDateOfBirth] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));

  const userId = user.result._id;

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
    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (!userData.dateOfBirth) return;
    const formattedDate = moment(userData.dateOfBirth).format("DD-MM-YYYY");
    setFormattedDateOfBirth(formattedDate);
  }, [userData.dateOfBirth]);

  const fetchUserDetails = async () => {
    try {
      const response = await API.get("/app/user/user-profile");
      const { name, email, contactNumber, dateOfBirth, stateOfResidence, image } =
        response.data;

      setUserData({
        name,
        email,
        contactNumber,
        dateOfBirth,
        stateOfResidence,
        image,
      });

      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("contactNumber", userData.contactNumber);
      formData.append("dateOfBirth", userData.dateOfBirth);
      formData.append("stateOfResidence", userData.stateOfResidence);
      formData.append("image", userData.image);

      await API.put(`/app/user/edit-profile/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      setUserData((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="Setting-main-view">
      <div className="Setting-title-view">Personal Details</div>
      <div className="Setting-data-view">
        {isEditing ? (
          <div className="Profile-photo-view">
            {userData.image && userData.image !== "undefined" ? (
              <img src={userData.image} alt="profile" />
            ) :  user.result.image ? (
              <img src={user.result.image} alt="profile" />
            ) : (
              <img src={profile} alt="profile" />
            )}
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <div className="Profile-photo-view">
            {userData.image && userData.image !== "undefined" ? (
              <img src={userData.image} alt="profile" />
            ) :  user.result.image ? (
              <img src={user.result.image} alt="profile" />
            ) : (
              <img src={profile} alt="profile" />
            )}
          </div>
        )}
        <div className="Setting-data-text">
          <div className="Setting-data-title">Name:</div>
          <div className="Setting-data-value">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userData.name || ""}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.name ? userData.name : ""}</p>
            )}
          </div>
        </div>
        <div className="Setting-data-text">
          <div className="Setting-data-title">Email:</div>
          <div className="Setting-data-value">
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={userData.email || ""}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.email ? userData.email : ""}</p>
            )}
          </div>
        </div>
        <div className="Setting-data-text">
          <div className="Setting-data-title">Contact number:</div>
          <div className="Setting-data-value">
            {isEditing ? (
              <input
                type="text"
                name="contactNumber"
                value={userData.contactNumber || ""}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.contactNumber ? userData.contactNumber : ""}</p>
            )}
          </div>
        </div>
        <div className="Setting-data-text">
          <div className="Setting-data-title">Date of birth:</div>
          <div className="Setting-data-value">
            {isEditing ? (
              <input
                type="date"
                name="dateOfBirth"
                value={userData.dateOfBirth || ""}
                onChange={handleInputChange}
              />
            ) : (
              <p>{formattedDateOfBirth ? formattedDateOfBirth : ""}</p>
            )}
          </div>
        </div>
        <div className="Setting-data-text">
          <div className="Setting-data-title">State of residence:</div>
          <div className="Setting-data-value">
            {isEditing ? (
              <input
                type="text"
                name="stateOfResidence"
                value={userData.stateOfResidence || ""}
                onChange={handleInputChange}
              />
            ) : (
              <p>{userData.stateOfResidence ? userData.stateOfResidence : ""}</p>
            )}
          </div>
        </div>
      </div>

      {isEditing ? (
        <button onClick={handleSave} className="save-button">
          <img src={check} alt="" />
          <h3>Save</h3>
        </button>
      ) : (
        <button onClick={handleEdit} className="edit-button">
          <img src={edit} alt="edit" />
          <p>Edit</p>
        </button>
      )}
    </div>
  );
};

export default PersonalDetails;
