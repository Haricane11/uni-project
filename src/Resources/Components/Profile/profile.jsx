// React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Components
import Button from "../Buttons/button.jsx";
import Tag from "../Tag/tag.jsx";

// Resources
import profileImg from "../../Images/profile.jpg";

export default function Profile() {
  const navigate = useNavigate();

  const fullName = "Nyan Tun Naing";
  const role = "club founder";

  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-detail-container">
          <div className="profile-img-container">
            <img src={profileImg} alt="" />
          </div>
          <div className="profile-content-container">
            <h3>{fullName}</h3>
            <div className="profile-role-wrapper">
              <Tag tagText={role} tagType={"normal"} />
            </div>
          </div>
          <Button
            btnSize={"M"}
            btnType={"normal"}
            btnText={"edit profile"}
            onClick={() => navigate("/editProfile")}
          />
        </div>
        <div className="profile-activity-container">
          <div className="profile-actions-container">
            <Button btnSize={"M"} btnType={"normal"} btnText={"events"} />
            <Button btnSize={"M"} btnType={"normal"} btnText={"orders"} />
          </div>
          <div className="profile-activities-container">
            <div className="profile-orders-wrapper"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
