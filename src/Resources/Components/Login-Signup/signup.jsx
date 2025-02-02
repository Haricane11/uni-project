// React Hooks
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// Components
import Button from "../Buttons/button.jsx";
import TextLink from "../Buttons/textLink.jsx";

// Resources

export default function Signup() {
  const navigate = useNavigate();
  const [validError, setValidError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitSignUp = async (data) => {
    console.log(data);

    const res = await fetch("http://localhost:8080/api/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const result = await res.text();
    console.log('Response from backend:', result);
    if (result === "User found") {
       navigate("/login");
    }else {
       setValidError(true);
    }
  };


  return (
    <section className="loginSignup-section">
      <div className="signup-text-container">
        <h1>need fresh activities?</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitSignUp)}>
          <div className="form-row">
            <h4>We will send a code to your email. Please fill your email.</h4>
          </div>
          <div className="form-row">
            <label htmlFor="">Email</label>
            <input 
              type="email" 
              placeholder="your@uit.edu.mm" 
              {...register("email", {required: true})}
            />
            {/* alert container */}
             {errors.email && (
                <div className="alert alert-error">
                  <span>Please enter your email</span>
                </div>
              )}
              {validError && (
                <div className="alert alert-error">
                  <span>Your Edu mail isn't found</span>
                </div>
              )}
          </div>
          <div className="form-row">
            <Button btnType={"normal"} btnText={"continue"} btnSize={"M"} />
            <TextLink  btnType={"button"} btnText={"GO TO LOGIN !"} onClick={() => navigate("/login")}/>
          </div>
        </form>
      </div>
    </section>
  );
}
