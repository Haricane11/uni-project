// React Hooks
import React from "react";
import { useState } from "react";

// Components
import Button from "../Buttons/button.jsx";
import { useNavigate } from "react-router";
// Resources

export default function Navbar() {
  const navLinks = [
    {
      id: 1,
      name: "club",
    },
    {
      id: 2,
      name: "food court",
    },
    {
      id: 3,
      name: "gallery",
    },
    {
      id: 4,
      name: "contact",
    },
  ];
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="nav-desktop">
      {/* <div className="nav-mobile-overlay"></div> */}
      <div className="nav-links">
        <div className="nav-links-wrapper">
          <ul className="ul-desktop">
            {navLinks.map((navLink) => (
              <li>
                <button
                  href=""
                  className="btn-primary btn-primary-S btn-primary-normal"
                >
                  <div className="btn-text btn__original-text">
                    <span>{navLink.name}</span>
                  </div>
                  <div className="btn-text btn__duplicate-text">
                    <span>{navLink.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="right-CTA-container">
            <Button
              btnType={"normal"}
              btnSize={"M"}
              btnText={"login / signup"}
              onClick={() => navigate("/login")}
            />
            <div
              className={`hamburger-wrapper ${open ? "active" : "inactive"}`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <div className="hamburger">
                <div className="hamburger-bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-nav-mobile ${open ? "active" : "inactive"}`}>
          <div className={`modal-block ${open ? "active" : "inactive"}`}>
            <ul className="ul-mobile">
              <span className="modal-menu">menu</span>
              <li>
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              {navLinks.map((navLink) => (
                <li>
                  <a href="">
                    <span>
                      {navLink.name[0].toUpperCase() + navLink.name.slice(1)}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href="/login">
                  <span>Login / Signup</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="modal-nav-background overlay"></div>
      </div>
    </nav>
  );
}
