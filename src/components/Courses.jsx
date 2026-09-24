import React, { useState, useEffect } from "react";
import { ShimmerCourseCard } from "./Shimmer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* ================= CATEGORIES ================= */

const categories = [
  "NIELIT Certified Courses",
  "Programming Courses",
  "Skill Development",
  "Professional & Career Courses",
];

/* ================= COURSES DATA ================= */

const courses = {
  "NIELIT Certified Courses": [
    {
      title: "CCC (Course on Computer Concepts)",
      desc: "Computer fundamentals, internet usage, and digital literacy.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      title: "O-Level Certification",
      desc: "Programming, networking, web technologies, and databases.",
      duration: "1 Year",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },
  ],

  "Programming Courses": [
    {
      title: "C++ Programming",
      desc: "OOP concepts and problem solving.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    },
    {
      title: "Java Programming",
      desc: "Core Java, OOP, and JDBC.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      title: "Python Programming",
      desc: "Automation, scripting, and backend basics.",
      duration: "2.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
  ],

  "Skill Development": [
    {
      title: "Basic Computer Skills",
      desc: "Hands-on training in MS Office, email, and internet usage.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png",
    },
    {
      title: "Advanced MS Office",
      desc: "Excel, Word, PowerPoint, and productivity tools.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/732/732220.png",
    },
    {
      title: "Typing (English)",
      desc: "Improve typing speed and accuracy.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/3022/3022251.png",
    },
    {
      title: "Spoken English",
      desc: "Fluency, pronunciation, and communication skills.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/942/942781.png",
    },
  ],

  "Professional & Career Courses": [
    {
      title: "Tally with GST",
      desc: "Accounting fundamentals and GST filing.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
    {
      title: "GST Practitioner Course",
      desc: "GST registration, returns, and compliance.",
      duration: "1.5 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, ads, analytics, and social media.",
      duration: "3 Months",
      img: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
    },
    {
      title: "Data Entry Operator",
      desc: "Typing, Excel, and documentation handling.",
      duration: "1 Month",
      img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    },
    {
      title: "Office Accountant",
      desc: "Accounting and office financial management.",
      duration: "2 Months",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721275.png",
    },
  ],
};

/* ================= COURSE CARD ================= */

const CourseCard = ({ course }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleCourseClick = () => {
    try {
      navigate("/Courses/ParticularCourse", { state: { course } });
      window.scrollTo(0, 0);
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
      <div className="h-44 bg-white flex items-center justify-center relative">
        {!imageLoaded && <div className="absolute inset-0 shimmer-wrapper" />}
        <img
          src={course.img}
          alt={course.title}
          className={`max-h-28 object-contain transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white">{course.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            {course.desc}
          </p>
          <p className="text-white/80 text-sm font-medium">
            {course.duration}
          </p>
        </div>

        <button
          onClick={handleCourseClick}
          className="mt-auto w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold transition-all shadow-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

/* ================= COURSES SECTION ================= */



/* ================= COURSES SECTION ================= */

const Courses = ({ flag, courseName, length }) => {
  const [activeTab, setActiveTab] = useState(courseName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="bg-[#0B235A] pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Explore Our Courses
          </h2>
          <p className="text-white/70 mt-3 text-sm sm:text-base">
            Government certified and career-oriented programs
          </p>
        </div>

        {/* ===== CATEGORY TABS (FIXED MOBILE) ===== */}
        <div
          className="
            flex gap-3 justify-start sm:justify-center
            overflow-x-auto scrollbar-hide
            pb-3 mb-10
            whitespace-nowrap
          "
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-4 sm:px-6 py-2 sm:py-3
                rounded-full font-semibold
                text-sm sm:text-base
                transition flex-shrink-0
                ${
                  activeTab === cat
                    ? "bg-orange-500"
                    : "bg-white/10 hover:bg-white/20"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== COURSE GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading
            ? [...Array(length)].map((_, i) => (
                <ShimmerCourseCard key={i} />
              ))
            : courses[activeTab]
                .slice(0, length)
                .map((course, i) => (
                  <CourseCard key={i} course={course} />
                ))}
        </div>
      </div>
    </section>
  );
};



export default Courses;
