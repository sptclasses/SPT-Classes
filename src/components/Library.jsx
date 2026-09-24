import React, { useState } from "react";
import Header from "./Header";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import libraryBg from "./Assets/library-bg.jpg";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";

const LibraryPage = () => {
  const [open, setOpen] = useState(false);
  const showRegister=useSelector((state)=>state?.RegistrationForm?.showRegisterForm);

  return (
    <div>
      {/* ===== HEADER ===== */}
      <Header />
      <BreadCrumbs courseTitle={""} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-white overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${libraryBg})` }}
        />

        {/* Global Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24">

          {/* Glass Content Panel */}
          <div className="max-w-3xl bg-black/45 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">

            <span className="inline-block mb-5 px-5 py-1.5 rounded-full bg-white/20 text-sm">
              Knowledge Hub of SPT Classes
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
              Explore the <span className="text-yellow-300">SPT Library</span>
            </h1>

            <p className="text-white/90 text-lg mb-8">
              A powerful learning space with books, digital resources, and curated
              study materials designed to help you succeed in academics and
              competitive exams.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-full bg-white text-[#1E40AF] font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition"
              >
                Browse Resources
              </button>

              <button className="px-8 py-3 rounded-full border border-white/60 hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Extensive Book Collection",
              desc: "Government exam, competitive, and academic books curated by experts.",
            },
            {
              title: "Digital Library Access",
              desc: "PDFs, notes, syllabus and online learning materials anytime.",
            },
            {
              title: "Peaceful Study Environment",
              desc: "A focused and distraction-free space to maximize productivity.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1E40AF]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-fadeIn"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#1E40AF]">
                Library Resources
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Choose the type of resources you want to explore.
            </p>

            <div className="space-y-3">
              <button className="w-full py-3 rounded-xl bg-[#1E40AF] text-white hover:bg-[#1E3A8A] transition">
                📘 Physical Books
              </button>
              <button className="w-full py-3 rounded-xl border hover:bg-gray-50 transition">
                💻 Digital Resources
              </button>
              <button className="w-full py-3 rounded-xl border hover:bg-gray-50 transition">
                📝 Study Materials
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <Footer />

      {showRegister &&
        <div className="w-[100vw] h-[100vh] backdrop-blur-xl fixed inset-0 z-[999] flex justify-center pb-6 pt-6">
          <RegisterForm />
        </div>
      }
    </div>
  );
};

export default LibraryPage;
