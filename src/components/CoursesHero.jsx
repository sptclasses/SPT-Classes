import React from "react";

const CoursesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-800">
      
      {/* Soft Glow Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="relative inline-block mb-6">
            <span className="relative z-10 px-5 py-2 rounded-full text-sm font-semibold bg-white border border-slate-200 shadow-sm">
              🎓 80+ Career & Govt Certified Courses
            </span>

            {/* Shimmer */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-sky-200/40 to-transparent animate-shimmer"></span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Learn Skills That <br />
            <span className="text-sky-600">Build Careers</span>, Not Just Certificates
          </h1>

          <p className="text-slate-600 text-lg max-w-xl mb-8">
            From <strong>NIELIT-certified programs</strong> to{" "}
            <strong>programming, skill development</strong>, and{" "}
            <strong>professional career courses</strong> — everything you need to
            get job-ready, under one roof.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "NIELIT Certified",
              "Programming",
              "Skill Development",
              "Career Courses",
            ].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sky-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-sky-700 transition shadow">
              Explore Courses
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-xl hover:bg-slate-100 transition">
              Book Free Counseling
            </button>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="hidden lg:block">
          <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl">

            <h3 className="text-xl font-semibold mb-6 text-sky-600">
              Popular Learning Tracks
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>✔ CCC / O-Level / A-Level (NIELIT)</li>
              <li>✔ C, C++, Java, Python</li>
              <li>✔ MERN Stack Development</li>
              <li>✔ Digital Marketing & Tally</li>
              <li>✔ Interview & Placement Prep</li>
            </ul>

            <div className="mt-8 flex justify-between text-sm text-slate-500">
              <span>👨‍🎓 1000+ Students</span>
              <span>🏆 Govt + Industry Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default CoursesHero;
