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
  const [otp, setOtp] = useState(false);
  const [password, setPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitSignUp = async (data) => {
    console.log(data);

    // const res = await fetch("http://localhost:8080/api/data", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify(data)
    // })
    // if (!res.ok) {
    //   throw new Error(`HTTP error! Status: ${res.status}`);
    // }

    // const result = await res.text();
    // console.log('Response from backend:', result);

    // if (result === "User found") {
    //   setOtp(true);
    //   navigate("/login");
    // } else {
    //   setValidError(true);
    // }

    if (data.email !== "Haricane@gmail.com") {
      return setValidError("Your Edu mail isn't found");
    } else {
      setOtp(true);
      setValidError(null);
    }

    if (data.otp) {
      if (data.otp !== "123abc") {
        return setValidError("Your otp code doesn't match")
      } else {
        setPassword(true);
        setOtp(false);
        setValidError(null);
      }
    }

    if (data.confirm) {
      if (data.confirm !== data.password) {
        return setValidError("Doesn't match your password!")
      } else {
        setValidError(null);
        navigate("/login")
      }
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
              {...register("email", { required: true })}
              disabled = {otp}
            />
            {/* alert container */}
            {errors.email && (
              <div className="alert alert-error">
                <span>Please enter your email</span>
              </div>
            )}
            {validError && !errors.email &&
              validError === "Your Edu mail isn't found" && (
                <div className="alert alert-error">
                  <span>{validError}</span>
                </div>
              )}
          </div>

          {otp && (
            <div className="form-row">
              <label htmlFor="">OTP</label>
              <input
                type="text"
                placeholder="your code"
                {...register("otp", { required: true })}
              />
              {/* alert container */}
              {errors.otp && (
                <div className="alert alert-error">
                  <span>Please enter your otp code</span>
                </div>
              )}
              {validError && !errors.otp &&
                validError === "Your otp code doesn't match" && (
                  <div className="alert alert-error">
                    <span>{validError}</span>
                  </div>
                )}
            </div>
          )}

          {password && (
            <>
              <div className="form-row">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="your little secret :D"
                  {...register("password", { required: true })}
                />
                {/* alert container */}
                {errors.password && (
                  <div className="alert alert-error">
                    <span>Please enter your password</span>
                  </div>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="your password"
                  {...register("confirm", { required: true })}
                />
                {/* alert container */}
                {errors.confirm && (
                  <div className="alert alert-error">
                    <span>Please confirm your password</span>
                  </div>
                )}
                {validError && !errors.confirm &&
                  validError === "Doesn't match your password!" && (
                    <div className="alert alert-error">
                      <span>{validError}</span>
                    </div>
                  )}
              </div>
            </>
          )}




          <div className="form-row">
            <Button btnType={"normal"} btnText={password ? "Submit" : "continue"} btnSize={"M"} />
            <TextLink btnType={"button"} btnText={"GO TO LOGIN !"} onClick={() => navigate("/login")} />
          </div>
        </form>
      </div>
    </section>
  );
}
