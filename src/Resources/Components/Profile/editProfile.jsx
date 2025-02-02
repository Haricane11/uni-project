// React Hooks
import React, {useState} from "react";
import { useNavigate } from "react-router";

// Components
import Button from "../Buttons/button.jsx";
import Tag from "../Tag/tag.jsx";
import TextLink from "../Buttons/textLink.jsx";

// Resources
import profileImg from "../../Images/profile.jpg";

export default function EditProfile() {
  const navigate = useNavigate()
  return (
    <>
      <div className="overlay editProfile-overlay active"></div>
      <div className="light-theme editProfile-container active">
        <div className="editProfile-content-wrapper">
          <div className="editProfile-title-container">
            <h4>Profile Settings</h4>
            <button className="delete-btn" onClick={() => navigate("/profile")}>
              <div className="delete-bar"></div>
            </button>
          </div>
          <div className="editProfile-form-container">
            <div className="form-container">
              <form action="">
                <div className="form-row">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="form-row">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="">Image</label>
                  <input type="file" name="" id="" />
                </div>
                <div className="form-row">
                  <Button
                    btnType={"monochrome"}
                    btnText={"confirm"}
                    btnSize={"M"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
