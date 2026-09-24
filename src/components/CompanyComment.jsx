import React from "react";

const companyFeedback = [
  {
    company: "TechNova Solutions",
    course: "MERN Stack Development",
    comment:
      "The curriculum is well-aligned with modern full-stack development requirements and industry practices.",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    company: "Infobyte Systems",
    course: "Python Programming",
    comment:
      "Candidates trained in Python demonstrate strong fundamentals and practical problem-solving skills.",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    company: "NextGen IT Services",
    course: "O-Level (NIELIT)",
    comment:
      "A structured and government-recognized program that builds a solid foundation for IT roles.",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  },
  {
    company: "BrightEdge Digital",
    course: "Digital Marketing",
    comment:
      "Course content reflects current digital trends and real-world marketing tools.",
    logo: "https://cdn-icons-png.flaticon.com/512/1998/1998087.png",
  },
  {
    company: "CoreLogic Technologies",
    course: "C & C++ Programming",
    comment:
      "Strong focus on logic building and core programming concepts required for entry-level developers.",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
  },
];

const CompanyReviews = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-5">
      
      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Industry Feedback on Our Courses
        </h2>
        <p className="text-blue-200 mt-3 max-w-2xl mx-auto">
          Our curriculum is reviewed and appreciated by companies for being
          industry-aligned and job-focused.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee hover:[animation-play-state:paused]">

          {[...companyFeedback, ...companyFeedback].map((item, index) => (
            <div
              key={index}
              className="mx-3 min-w-[340px] max-w-[340px]
                         bg-white/10 backdrop-blur-xl
                         border border-white/20 rounded-2xl p-6
                         shadow-xl text-white"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-12 h-12 rounded-lg bg-white p-1"
                />
                <div>
                  <h4 className="font-semibold text-base">
                    {item.company}
                  </h4>
                  <p className="text-xs text-blue-300">
                    Course: {item.course}
                  </p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-sm text-blue-100 leading-relaxed">
                “{item.comment}”
              </p>

              {/* Accent */}
              <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  );
};

export default CompanyReviews;
