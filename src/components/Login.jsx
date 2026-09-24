import React, { useEffect, useState } from "react";
import "./Style/Login.css"
import logo from "./Assets/spt_classes_logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH_ENDPOINTS } from "./endpoint";
import toast from "react-hot-toast";

export function LeftLoginComponent() {
  return (
    <div className="login-left">
      <div className="login-left-top">
        <img src={logo} alt="SPT Classes" className="login-left-logo" />
      </div>

      <div className="login-left-content">
        <h2>
          <span>Login</span> to your
          <br />
          SPT Classes account.
        </h2>
        <p>
          Access your enrolled courses, progress and important updates in
          one place.
        </p>
      </div>
    </div>
  )
}

export function LoginSkeleton() {
  return (
    <div className="login-right animate-pulse">
      <h3 className="login-right-title">
        <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
      </h3>

      <form className="login-form">

        {/* Email */}
        <div className="form-group">
          <label>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </label>
          <div className="h-10 w-full bg-gray-300 rounded mt-2"></div>
        </div>

        {/* Password */}
        <div className="form-group mt-4">
          <label>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </label>
          <div className="h-10 w-full bg-gray-300 rounded mt-2"></div>

          <div className="password-hint mt-2">
            <div className="h-3 w-48 bg-gray-300 rounded"></div>
          </div>

          <div className="password-strength mt-3">
            <div className="h-2 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-20 bg-gray-300 rounded mt-2"></div>
          </div>
        </div>

        <button
          type="button"
          className="primary-btn h-11 w-full bg-gray-300 rounded mt-6"
        ></button>
      </form>

      <p className="login-right-subtext mt-4">
        <div className="h-4 w-40 bg-gray-300 rounded"></div>
      </p>
    </div>
  );
}

const RightLoginComponent = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "",
    color: "",
  });


  function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function evaluatePassword(pwd) {
    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    let label = "";
    let color = "";

    if (pwd.length === 0) {
      label = "";
      color = "";
    } else if (score <= 2) {
      label = "Weak password";
      color = "weak";
    } else if (score === 3 || score === 4) {
      label = "Good password";
      color = "medium";
    } else {
      label = "Strong password";
      color = "strong";
    }

    setPasswordStrength({ score, label, color });
  }


  async function handleSubmit(e) {
    e.preventDefault();

    validateEmail(email);

    if (emailError) {
      return;
    }

    const result = await axios.post(`${AUTH_ENDPOINTS}/studentLogin`,{email:email,password:password},{withCredentials:true})
    if(result?.data?.success){
      toast.success("Login done Successfully")
      navigate("/")
    } else toast.error(result?.data?.message)
    // console.log("Login Data:", { email, password });
  }

  function loadSignUp(e){
    try{
      e.preventDefault();
      e.stopPropagation();
      navigate("/signup")

    }catch(error){
      console.log(error+"error while going to sign up from login")
    }
  }

  return (
    <div className="login-right">
      <h3 className="login-right-title">
        Please enter your details to continue.
      </h3>
      <form className="login-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={emailError ? "input-error" : ""}
            required
          />


          {emailError && <p className="error-text">{emailError}</p>}
        </div>


        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              evaluatePassword(value);
            }}
            required
          />

          <div className="password-hint">
            <small>
              Use at least 8 characters including uppercase, lowercase, number and a symbol.
            </small>
          </div>

          <div className="password-strength">
            <div
              className={`password-strength-bar ${passwordStrength.color}`}
              style={{
                width: `${(passwordStrength.score / 5) * 100}%`,
              }}
            />
            {passwordStrength.label && (
              <span
                className={`password-strength-label ${passwordStrength.color}`}
              >
                {passwordStrength.label}
              </span>
            )}
          </div>
        </div>

        <button type="submit" className="primary-btn">
          Continue
        </button>
      </form>


      <p className="login-right-subtext">
        Don't have an SPT Classes account yet?{" "}
        <span className="link-text" onClick={(e)=>loadSignUp(e)}>Create one now</span>
      </p>
    </div>
  );
};

export default function Login() {
  const [skeleton, setSkeleton] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 1000)
  }, [])
  return (
    <>
      <div className="login-page">

        <div className="bg-waves"></div>
        <div className="login-box">
          <LeftLoginComponent />
          {skeleton ? <LoginSkeleton /> : <RightLoginComponent />}
        </div>
      </div>
    </>
  )
}