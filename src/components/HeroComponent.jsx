import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShimmerHeroCard } from "./Shimmer";
// import RegisterForm from "./RegisterForm";
import library1 from "./Assets/hero/library1.jpg";
import library2 from "./Assets/hero/library2.jpg";
import students from "./Assets/hero/library3.png";
// import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShowRegisterFrom } from "../redux/Slices/registerFormSlice";

/* ================= CARD COMPONENT ================= */
export function CardComponent({ index }) {
  const titleArray = ["Registration", "Latest Announcements", "Discover Us"];
  const messageArray = [
    "Get enrolled into government-certified education programs with expert faculty and structured learning paths.",
    "Stay updated with academic events, new courses, and announcements from SPT Classes.",
    "Learn more about our vision, teaching methodology, and modern education ecosystem.",
  ];
  const buttonTextArray = ["Apply Now", "Read more", "Learn more"];

  return (
    <div className="group bg-[#0B235A] text-white rounded-xl p-4 shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 md:hover:-translate-y-1 h-full flex flex-col cursor-pointer">
      <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 transition">
        {titleArray[index]}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed mb-3">
        {messageArray[index]}
      </p> 
      <div className="mt-auto text-orange-400 font-medium text-sm">
        {buttonTextArray[index]} →
      </div>
    </div>
  );
}

/* ================= HERO ================= */

  const heroImages = [library1, library2, students];
const HeroComponent = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  /* IMAGE ROTATION */
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 1200);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  /* FIRST IMAGE LOAD */
  useEffect(() => {
    const img = new Image();
    img.src = heroImages[0];
    img.onload = () => setIsLoading(false);
  }, []);

  const handleAnnouncements = (e) => {
    e.preventDefault();
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDiscoverUs = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  function handleRegisterClick(e) {
    try {
      e.preventDefault();
      e.stopPropagation();
      dispatch(setShowRegisterFrom());
    } catch (error) {
      toast.error("wrong while clicking on register");
    }
  }

  return (
    <>
      <section className="relative w-full min-h-[520px] md:min-h-[600px] overflow-hidden">

        {/* APPLY NOW */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={(e) => handleRegisterClick(e)}
            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition"
          >
            Apply Now
          </button>
        </div>

        {/* BACKGROUND */}
        {isLoading ? (
          <div className="absolute inset-0 bg-[#0B235A] animate-pulse" />
        ) : (
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${heroImages[currentImage]})`,
              filter: "blur(2.5px)",
              transform: "scale(1.03)",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B235A]/60 to-[#0B235A]/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-32">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Launching our Students into <br /> Bright Futures
          </h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            SPT Classes provides expert guidance, structured courses, and
            result-oriented teaching for academic excellence.
          </p>
        </div>

        <div className="relative z-10 mt-24 px-6 pb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading ? (
              <>
                <ShimmerHeroCard />
                <ShimmerHeroCard />
                <ShimmerHeroCard />
              </>
            ) : (
              <>
                <div onClick={(e) => handleRegisterClick(e)}>
                  <CardComponent index={0} />
                </div>
                <div onClick={handleAnnouncements}>
                  <CardComponent index={1} />
                </div>
                <div onClick={handleDiscoverUs}>
                  <CardComponent index={2} />
                </div>
              </>
            )}
          </div>
        </div>

      </section>
    </>
  );
});

export default HeroComponent;
