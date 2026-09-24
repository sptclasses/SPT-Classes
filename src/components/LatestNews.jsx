import React, { forwardRef, useState, useEffect } from "react";
import { ShimmerAnnouncementCard } from "./Shimmer";

/* ================= DATA ================= */

const newsData = [
  {
    title: "New Batch Starts Jan 5",
    description:
      "Admissions open for the upcoming government-certified program.",
    badge: "New",
    date: "Dec 20, 2024",
  },
  {
    title: "Placement Drive Successfully Conducted",
    description:
      "Over 30+ students received interview opportunities this week.",
    badge: "Success",
    date: "Dec 18, 2024",
  },
  {
    title: "New Course: Full-Stack Web Dev",
    description:
      "A complete program covering HTML, CSS, JS, React & Node.",
    badge: "Course",
    date: "Dec 15, 2024",
  },
  {
    title: "Holiday Notice",
    description:
      "Classes will remain closed during the festive season. Happy holidays!",
    badge: "Notice",
    date: "Dec 12, 2024",
  },
  {
    title: "Student Achievement",
    description:
      "Congratulations to our students for outstanding performance in recent exams.",
    badge: "Achievement",
    date: "Dec 10, 2024",
  },
  {
    title: "Workshop on AI & ML",
    description:
      "Free workshop on Artificial Intelligence and Machine Learning fundamentals.",
    badge: "Workshop",
    date: "Dec 8, 2024",
  },
];

/* ================= MODAL ================= */

const AnnouncementModal = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white max-w-lg w-full rounded-xl shadow-2xl p-6 animate-fadeIn">
        <div className="flex justify-between items-start gap-3 mb-4">
          <h3 className="text-xl font-bold text-gray-800">{news.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
          {news.badge}
        </span>

        <p className="text-gray-700 leading-relaxed mb-4">
          {news.description}
        </p>

        <p className="text-sm text-gray-400">{news.date}</p>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= CARD ================= */

const AnnouncementCard = ({ news, index, onReadMore }) => {
  const getBadgeColor = (badge) => {
    switch (badge.toLowerCase()) {
      case "new":
        return "bg-green-500";
      case "success":
        return "bg-blue-500";
      case "course":
        return "bg-purple-500";
      case "notice":
        return "bg-orange-500";
      case "achievement":
        return "bg-yellow-500";
      case "workshop":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500
                 overflow-hidden border border-gray-100 hover:border-blue-200
                 animate-fadeIn flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition flex-1">
            {news.title}
          </h3>
          <span
            className={`${getBadgeColor(
              news.badge
            )} text-white text-xs font-semibold px-3 py-1 rounded-full`}
          >
            {news.badge}
          </span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {news.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">{news.date}</span>
          <button
            onClick={onReadMore}
            className="px-2 py-1 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */

const LatestNews = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-mt-24 w-full py-16 bg-gradient-to-b from-gray-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Latest Announcements
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Stay updated with our recent news and updates
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {loading
            ? [...Array(6)].map((_, i) => (
                <ShimmerAnnouncementCard key={i} />
              ))
            : newsData.map((news, i) => (
                <AnnouncementCard
                  key={i}
                  news={news}
                  index={i}
                  onReadMore={() => setSelectedNews(news)}
                />
              ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition shadow-md">
            View All Announcements →
          </button>
        </div>
      </div>

      {selectedNews && (
        <AnnouncementModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
});

export default LatestNews;
