// React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

// Components
import Button from "../Buttons/button.jsx";
import TextLink from "../Buttons/textLink.jsx";

// Resources

export default function Login() {
  const navigate = useNavigate();
  const [validError, setValidError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();
  
  const submitLogin = async (data) => {
    // const res = await fetch("http://localhost:8080/api/data", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // const result = await res.text();


    // if (result === "User not found") {
    //   return setValidError("EMAIL DOESN'T MATCH");
    // } else {
    //   setValidError(null);
    // }
    // if (result === "Incorrect Password") {
    //   return setValidError("INCORRECT PASSWORD");
    // } else {
    //   setValidError(null);
    // }
    if (data.email !== "Haricane@gmail.com") {
       return setValidError("EMAIL DOESN'T MATCH");
    }else {
      setValidError(null);
    }
    if (data.password !== "123") {
      return setValidError("INCORRECT PASSWORD");
    } else {
      setValidError(null)
      navigate("/profile")
    }
  };

  return (
    <section className="loginSignup-section">
      <div className="login-text-container">
        <h1>SIMPLIFY your CAMPUS LIFE LOGIN, EXPLORE!</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(submitLogin)}>
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
                  <span>EMAIL IS REQUIRED</span>
                </div>
              )}
              {validError &&
                !errors.email &&
                validError === "EMAIL DOESN'T MATCH" && (
                  <div className="alert alert-error">
                    <span>{validError}</span>
                  </div>
                )}
          </div>
          <div className="form-row">
            <label htmlFor="">Password</label>
            <input 
              type="password" 
              placeholder="your little secret :D"
              {...register("password", {required: true})}
            />
             {/* alert container */}
             {errors.password && (
                <div className="alert alert-error">
                  <span>PASSWORD IS REQUIRED</span>
                </div>
              )}
              {validError &&
                !errors.password &&
                validError === "INCORRECT PASSWORD" && (
                  <div className="alert alert-error">
                    <span>{validError}</span>
                  </div>
                )}
          </div>
          <div className="form-row">
            <Button btnType={"normal"} btnText={"continue"} btnSize={"M"} />
            <TextLink btnType={"button"} btnText={"NEW ACCOUNT?"} onClick={() => navigate("/")} />
          </div>
        </form>
      </div>
    </section>
  );
}
