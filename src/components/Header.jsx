import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "./Assets/spt_classes_logo.svg";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShowRegisterFrom } from "../redux/Slices/registerFormSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const userMenuRef = useRef(null);
  const facilitiesRef = useRef(null);

  /* ================= LOAD USER ================= */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  }, []);

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    function handleClickOutside(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (facilitiesRef.current && !facilitiesRef.current.contains(e.target)) {
        setFacilitiesOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* ================= HANDLERS ================= */
  const handleCourse = () => {
    try {
      navigate("/Courses", {
        state: { tab: "NIELIT Certified Courses" },
      });
      setMobileNavOpen(false);
    } catch {
      toast.error("Error loading courses");
    }
  };

  const handleRegister = () => {
    setMobileNavOpen(false);
    setMenuOpen(false);
    dispatch(setShowRegisterFrom());
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    navigate("/");
  };

  /* ================= NAV BOX ================= */
  const navBox = (path) =>
    `
      flex items-center gap-1
      px-4 py-1.5 rounded-full
      transition-all duration-200
      backdrop-blur-sm
      ${
        location.pathname === path
          ? "bg-white/30 text-white shadow-md"
          : "bg-white/10 text-white hover:bg-white/20 hover:shadow-md"
      }
    `;

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] border-b border-white/20 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="SPT Logo" className="w-12 h-12" />
          <div>
            <p className="text-white font-semibold text-sm md:text-lg">
              Sharp Programmer Technology
            </p>
            <p className="hidden md:block text-blue-100 text-xs tracking-widest">
              Where Learning Meets Excellence
            </p>
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-4 text-sm font-medium">

          <Link to="/" className={navBox("/")}>Home</Link>
          <button onClick={handleCourse} className={navBox("/Courses")}>Courses</button>
          <Link to="/About" className={navBox("/About")}>About</Link>
          <Link to="/Contact" className={navBox("/Contact")}>Contact</Link>

          <div className="relative" ref={facilitiesRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFacilitiesOpen(!facilitiesOpen);
              }}
              className={navBox("/facilities")}
            >
              Facilities
              <FiChevronDown
                className={`transition-transform ${
                  facilitiesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {facilitiesOpen && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl p-3 animate-dropdown">
                <button
                  onClick={() => {
                    setFacilitiesOpen(false);
                    navigate("/Facilities/Library");
                  }}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  Library
                </button>

                <button
                  onClick={() => {
                    setFacilitiesOpen(false);
                    navigate("/facilities/online-test");
                  }}
                  className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  Online Test
                </button>
              </div>
            )}
          </div>

          <button onClick={handleRegister} className={navBox("/register")}>
            Registration Form
          </button>
        </nav>

        {/* ================= PROFILE ================= */}
        <div className="flex items-center gap-3 relative" ref={userMenuRef}>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {mobileNavOpen ? <FiX /> : <FiMenu />}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
          >
            {user ? (
              <span className="font-semibold text-[#1E40AF]">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            ) : (
              <FiUser className="text-[#1E40AF]" />
            )}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-60 bg-white rounded-xl shadow-xl p-4 animate-dropdown">
              {user ? (
                <>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500 mb-3">{user.email}</p>

                  <button
                    onClick={() => navigate("/profile")}
                    className="block w-full text-left px-3 py-2 rounded hover:bg-blue-50"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded bg-red-50 text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/Login")}
                    className="w-full py-2 bg-blue-600 text-white rounded mb-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/Signup")}
                    className="w-full py-2 bg-gray-100 rounded"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>





      {/* ================= MOBILE NAV ================= */}
     {/* ================= MOBILE NAV ================= */}
{mobileNavOpen && (
  <div className="lg:hidden bg-[#1E40AF]/95 px-6 py-6 space-y-2 text-white text-sm animate-dropdown">

    <Link
      to="/"
      onClick={() => setMobileNavOpen(false)}
      className="block py-2 border-b border-white/20"
    >
      Home
    </Link>

    <button
      onClick={handleCourse}
      className="block w-full text-left py-2 border-b border-white/20"
    >
      Courses
    </button>

    <Link
      to="/About"
      onClick={() => setMobileNavOpen(false)}
      className="block py-2 border-b border-white/20"
    >
      About
    </Link>

    <Link
      to="/Contact"
      onClick={() => setMobileNavOpen(false)}
      className="block py-2 border-b border-white/20"
    >
      Contact
    </Link>

    {/* ===== FACILITIES (MOBILE) ===== */}
    <div className="pt-2">
      <p className="text-white/70 text-xs uppercase tracking-wide mb-2">
        Facilities
      </p>

      <button
        onClick={() => {
          setMobileNavOpen(false);
          navigate("/facilities/library");
        }}
        className="block w-full text-left py-2 pl-3 border-l-2 border-white/30"
      >
        Library
      </button>

      <button
        onClick={() => {
          setMobileNavOpen(false);
          navigate("/facilities/online-test");
        }}
        className="block w-full text-left py-2 pl-3 border-l-2 border-white/30"
      >
        Online Test
      </button>
    </div>

    <button
      onClick={handleRegister}
      className="block w-full text-left py-2 mt-3 bg-white text-[#1E40AF] rounded-lg font-semibold text-center"
    >
      Registration Form
    </button>
  </div>
)}

    </header>



  );
};

export default Header;
