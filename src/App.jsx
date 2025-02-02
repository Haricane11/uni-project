// React Hooks
import { useState } from "react";
import { Outlet } from "react-router";
// Components
import Navbar from "./Resources/Components/Navbar/navbar.jsx";
import Login from "./Resources/Components/Login-Signup/login.jsx";
import Signup from "./Resources/Components/Login-Signup/signup.jsx";
import Footer from "./Resources/Components/Footer/footer.jsx";
import Tag from "./Resources/Components/Tag/tag.jsx";
import Profile from "./Resources/Components/Profile/profile.jsx";

// Resources

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Profile /> */}
      {/* <div className="container">
        <div className="light-theme">
          <button
            href=""
            className="btn-primary btn-primary-S btn-primary-normal"
          >
            <div className="btn-text btn__original-text">
              <span>club</span>
            </div>
            <div className="btn-text btn__duplicate-text">
              <span>club</span>
            </div>
          </button>
          <button
            href=""
            className="btn-primary btn-primary-M btn-primary-monochrome"
          >
            <div className="btn-text btn__original-text">
              <span>Contact</span>
            </div>
            <div className="btn-text btn__duplicate-text">
              <span>Contact</span>
            </div>
          </button>
          <button
            href=""
            className="btn-primary btn-primary-M btn-primary-normal"
          >
            <div className="btn-text btn__original-text">
              <span>login / signup</span>
            </div>
            <div className="btn-text btn__duplicate-text">
              <span>login / signup</span>
            </div>
          </button>
          <button
            href=""
            className="btn-primary btn-primary-M btn-primary-normal"
          >
            <div className="btn-text btn__original-text">
              <span>Art & Photo</span>
            </div>
            <div className="btn-text btn__duplicate-text">
              <span>Art & Photo</span>
            </div>
          </button>
          <button className="btn-readMore">
            <div className="btn-readMore-text">
              <svg
                className="icon readMore-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.72223V17.2778"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2778 12H6.72223"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.7533 17.2467 2.5 12 2.5C6.7533 2.5 2.5 6.7533 2.5 12C2.5 17.2467 6.7533 21.5 12 21.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Read more</span>
            </div>
          </button>
          <Tag tagText={"club founder"} tagType={"normal"} />
          <Tag tagText={"club founder"} tagType={"monochrome"} />
          <button className="text-link">
            <span>[email protected]</span>
          </button>
        </div>
        <div className="dark-theme"></div>
      </div> */}
    </>
  );
}

export default App;
