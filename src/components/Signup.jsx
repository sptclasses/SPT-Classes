import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Assets/spt_classes_logo.svg";
import "./Style/Signup.css";
import axios from "axios";
import { AUTH_ENDPOINTS} from "./endpoint";
import toast from "react-hot-toast";


function LeftSignUp() {
  return (
    <div className="signup-left">
      <div className="signup-left-top">
        <img src={logo} alt="logo" className="signup-left-logo" />
      </div>

      <div className="signup-left-content">
        <h2>
          <span>Join</span> SPT Classes
        </h2>
        <p>
          Start learning — access courses, progress tracking and community.
        </p>
      </div>
    </div>
  )
}

function RightSignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    accepted: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "",
    color: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  function evaluatePassword(pwd) {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    let label = "";
    let color = "";
    if (!pwd) {
      label = "";
      color = "";
    } else if (score <= 2) {
      label = "Weak";
      color = "weak";
    } else if (score === 3 || score === 4) {
      label = "Good";
      color = "medium";
    } else {
      label = "Strong";
      color = "strong";
    }
    setPasswordStrength({ score, label, color });
  }

  function validateAll() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@gmail\.(com|in|net|org)$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";
    if (form.confirm !== form.password) e.confirm = "Passwords do not match";
    if (!form.accepted) e.accepted = "You must accept Terms & Conditions";
    return e;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    if (name === "password") evaluatePassword(value);
    if (name === "confirm" || (name === "password" && form.confirm)) {
      setErrors((prev) => ({
        ...prev,
        confirm: value === form.confirm ? "" : prev.confirm,
      }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const eObj = validateAll();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }


    let result;
    try {
      const studentDetials={
        studentFullName: form.name.trim(),
        studentEmailId: form.email.trim(),
        studentPassword: form.password,
        TC:form.accepted
      }

      result=await axios.post(`${AUTH_ENDPOINTS}/registerStudent`,{studentDetials:studentDetials},{withCredentials:true})

      
    } catch (err) { 
      console.log(err)
      toast.error(err?.response?.data?.message)
    }
    
    if(result?.data?.flag){
      setSuccessMsg("Account created successfully! Redirecting to login...");
      setForm({
        name: "",
        email: "",
        password: "",
        confirm: "",
        accepted: false,
      });
      setPasswordStrength({ score: 0, label: "", color: "" });
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/Login");
      }, 1400);
    }
  }

  return (
    <div className="signup-right">
      <h3 className="signup-right-title">Create your account</h3>

      <div className="signup-form">
        <div className="form-grid">
          <div className="form-field">
            <label>Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field">
            <label>Password</label>
            <div className="password-row">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="password-hint">
              <small>
                Use at least 8 characters including uppercase, lowercase & a
                number.
              </small>
            </div>

            <div className="password-strength">
              <div
                className={`password-strength-bar ${passwordStrength.color}`}
                style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
              />
              {passwordStrength.label && (
                <span
                  className={`password-strength-label ${passwordStrength.color}`}
                >
                  {passwordStrength.label} password
                </span>
              )}
            </div>
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}
          </div>

          <div className="form-field">
            <label>Confirm password</label>
            <div className="password-row">
              <input
                name="confirm"
                type={showConfirm ? "text" : "password"}
                value={form.confirm}
                onChange={handleChange}
                placeholder="Repeat your password"
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label="Toggle confirm visibility"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirm && (
              <p className="error-text">{errors.confirm}</p>
            )}
          </div>
        </div>

        <div className="form-grid">
          <div className="form-field terms-field">
            <label className="terms-label">
              <input
                type="checkbox"
                name="accepted"
                checked={form.accepted}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span>I agree to the Terms & Conditions</span>
            </label>
            {errors.accepted && (
              <p className="error-text">{errors.accepted}</p>
            )}
          </div>
        </div>

        <div className="form-actions">
          <div className="primary-btn flex justify-center" onClick={handleSubmit}>
            Create account
          </div>
          {successMsg && <p className="success-text">{successMsg}</p>}
        </div>

        <p className="small-note">
          Already have an account?{" "}
          <button
            type="button"
            className="link-text"
            onClick={() => navigate("/Login")}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}

function RightSignUpSkeleton() {
  return (
    <div className="signup-right space-y-6">
      {/* Title */}
      <div className="w-48 h-6 bg-gray-400 rounded"></div>

      {/* Form grid: Full Name & Email */}
      <div className="form-grid gap-4">
        {/* Full Name */}
        <div className="form-field space-y-2">
          <div className="w-full h-4 bg-gray-400 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
        </div>

        {/* Email */}
        <div className="form-field space-y-2">
          <div className="w-full h-4 bg-gray-400 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Password & Confirm */}
      <div className="form-grid gap-4">
        {/* Password */}
        <div className="form-field space-y-2">
          <div className="w-full h-4 bg-gray-400 rounded"></div>
          <div className="w-full h-4 bg-gray-400 rounded"></div>
          <div className="w-full h-2 bg-gray-400 rounded mt-2"></div> {/* strength bar */}
        </div>

        {/* Confirm Password */}
        <div className="form-field space-y-2">
          <div className="w-full h-4 bg-gray-400 rounded"></div>
          <div className="w-full h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="form-grid">
        <div className="form-field terms-field space-y-2">
          <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="form-actions space-y-2">
        <div className="w-40 h-10 bg-gray-500 rounded"></div>
        <div className="w-32 h-8 bg-gray-400 rounded"></div>
      </div>

      {/* Small note */}
      <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
    </div>
  );
}

export default function Signup() {
  const [skeleton,setSkeleton]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setSkeleton(false);
    },1000)
  },[])

  return (
    <div className="signup-page">
      <div className="login-bg" aria-hidden="true">
        <div className="login-bg-layer layer-1" />
        <div className="login-bg-layer layer-2" />
        <div className="login-bg-layer layer-3" />
        <div className="login-bg-shine" />
      </div>

      <div className="signup-box">
        <LeftSignUp/>
        {skeleton ? <RightSignUpSkeleton /> : <RightSignUp />}
      </div>
    </div>
  );
}
