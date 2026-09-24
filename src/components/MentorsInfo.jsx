import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import taherImg from "./Assets/photo_21.jpg";
import ayushImg from "./Assets/ayushPandey.png";
import abhishekImg from "./Assets/abhishekKumar.png";

const mentors = [
  {
    name: "Taher Malik",
    role: "Senior MERN Stack Mentor",
    image: taherImg,
  },
  {
    name: "Ayush Pandey",
    role: "Python & Data Structures Mentor",
    image: ayushImg,
  },
  {
    name: "Abhishek Kumar",
    role: "DevOps & Cloud Mentor",
    image: abhishekImg,
  },
  {
    name: "Ananya Singh",
    role: "Frontend (React) Mentor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function MentorsInfo() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? mentors.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === mentors.length - 1 ? 0 : i + 1));

  const getIndex = (offset) =>
    (index + offset + mentors.length) % mentors.length;

  return (
    <section className="relative w-full overflow-hidden">
      {/* GLASSY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-white/40 to-sky-100/60 backdrop-blur-2xl" />

      <div className="relative w-full max-w-6xl mx-auto py-20 px-4">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-sky-800 mb-3">
          Meet Our Expert Mentors
        </h2>
        <p className="text-center text-sky-600 mb-14">
          Learn from industry professionals who guide you at every step
        </p>

        <div className="relative flex items-center justify-center gap-6">
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 p-3 rounded-full
                       bg-white/70 backdrop-blur-md
                       border border-white/40
                       shadow-[0_10px_30px_rgba(56,189,248,0.25)]
                       hover:scale-105 transition"
          >
            <ChevronLeft className="w-6 h-6 text-sky-700" />
          </button>

          {/* CARDS */}
          {[-1, 0, 1].map((pos) => {
            const mentor = mentors[getIndex(pos)];
            const isCenter = pos === 0;

            return (
              <motion.div
                key={mentor.name}
                animate={{
                  scale: isCenter ? 1 : 0.9,
                  opacity: isCenter ? 1 : 0.55,
                }}
                transition={{ duration: 0.4 }}
                className={`w-[280px] md:w-[320px]
                  ${!isCenter ? "blur-[1.5px]" : ""}
                `}
              >
                <div
                  className="
                    relative
                    rounded-3xl p-6
                    bg-white/70 backdrop-blur-xl
                    border border-white/40
                    shadow-[0_25px_70px_rgba(56,189,248,0.25)]
                    flex flex-col items-center text-center
                  "
                >
                  {/* IMAGE */}
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full
                               border-4 border-white
                               shadow-lg mb-4"
                  />

                  {/* NAME */}
                  <h3 className="text-lg font-semibold text-sky-900">
                    {mentor.name}
                  </h3>

                  {/* ROLE */}
                  <p className="text-sm text-sky-600 mt-1">
                    {mentor.role}
                  </p>

                  {/* BADGE */}
                  {isCenter && (
                    <span
                      className="
                        mt-4 px-4 py-1.5
                        text-xs font-medium text-sky-700
                        bg-white/80 backdrop-blur
                        border border-white/50
                        rounded-full shadow-sm
                      "
                    >
                      Premium Instructor
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 z-20 p-3 rounded-full
                       bg-white/70 backdrop-blur-md
                       border border-white/40
                       shadow-[0_10px_30px_rgba(56,189,248,0.25)]
                       hover:scale-105 transition"
          >
            <ChevronRight className="w-6 h-6 text-sky-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
