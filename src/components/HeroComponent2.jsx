import { forwardRef, useState, useEffect } from "react";

import teacherImg from "./Assets/teacher.png";
import { useNavigate } from "react-router-dom";

function CardComponent({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  const titleArray = ["Registration", "Latest Announcements", "Discover Us"];
  const messageArray = [
    "Get enrolled into government-certified education programs with expert faculty and structured learning paths.",
    "Stay updated with academic events, new courses, and announcements from SPT Classes.",
    "Learn more about our vision, teaching methodology, and modern education ecosystem.",
  ];
  const buttonTextArray = ["Apply Now", "Read more", "Learn more"];

  return (
    <div
      className="group bg-[#0B235A] text-white rounded-xl p-4 shadow-lg
                 border border-white/10 hover:border-white/30
                 transition-all duration-300 md:hover:-translate-y-1
                 h-full w-[350px] flex flex-col"
    >
      <div className="mb-2">
        <div className="bg-orange-500/20 p-2 rounded-lg text-orange-400 w-fit
                        group-hover:bg-orange-500 group-hover:text-white transition">
          {/* icon */}
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 transition">
        {titleArray[index]}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed mb-3">
        {messageArray[index]}
      </p>

      <div className="mt-auto flex items-center gap-1.5 text-orange-400 font-medium text-sm">
        {buttonTextArray[index]}
        <span className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}>→</span>
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="bg-[#0B235A] rounded-xl p-6 shadow-xl border border-white/10 space-y-4 h-full">
      <div className="w-32 h-5 bg-white/20 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-white/20 rounded animate-pulse" />
        <div className="w-3/4 h-4 bg-white/20 rounded animate-pulse" />
        <div className="w-1/2 h-4 bg-white/20 rounded animate-pulse" />
      </div>
      <div className="w-28 h-4 bg-orange-400/40 rounded animate-pulse mt-4" />
    </div>
  );
}

const HeroComponent2 = forwardRef((props, ref) => {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setSkeleton(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnnouncements = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/registerForm");
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-gray-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT SECTION */}
          <div className="fex flex-col gap-3">
            <div><h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Bharat’s <span className="text-blue-600">Trusted & Affordable</span>
              <br /> Educational Platform
            </h1></div>

            <div><p className="mt-4 text-gray-600 text-lg">
              Unlock your potential by signing up to learn with expert guidance.
              The most affordable learning solution.
            </p></div>

            {/* Bottom speech bubble */}
            <div className="mt-10 md:hidden bg-purple-600 text-white text-sm px-4 py-2 rounded-2xl shadow-xl animate-bounceSlow">
              “Learn with guidance & love”
            </div>
          </div>

          {/* RIGHT SIDE – TEACHER HERO SECTION */}
          <div className="relative flex items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-white/40 blur-3xl"></div>

            {/* Middle Glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-purple-300/30 blur-2xl animate-pulse"></div>

            {/* Teacher Circular Image */}
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden 
            shadow-2xl animate-floating z-10 bg-white border-blue-500 border-2">
              <img
                src={teacherImg}
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TOP Speech Bubble - moved UP */}
            <div className="absolute -top-16 right-4 bg-white text-gray-800 
            text-sm px-4 py-2 rounded-2xl shadow-xl border border-gray-200 animate-bounceSlow">
              “Sir, What is this course?”
            </div>

            {/* Bottom Speech Bubble */}
            <div className="absolute bottom-0 -left-10 bg-blue-600 text-white 
            text-sm px-4 py-2 rounded-2xl shadow-xl hidden md:block animate-bounceSlow">
              “Learn with guidance & love”
            </div>

          </div>
        </div>
        <div className="relative z-10 mt-8 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div onClick={handleRegister}>
              {skeleton ? <CardSkeleton /> : <CardComponent index={0} />}
            </div>

            <div onClick={handleAnnouncements}>
              {skeleton ? <CardSkeleton /> : <CardComponent index={1} />}
            </div>

            {skeleton ? <CardSkeleton /> : <CardComponent index={2} />}
          </div>
        </div>
      </section>
    </>
  );
});

export default HeroComponent2
