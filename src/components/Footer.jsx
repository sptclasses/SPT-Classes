import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B235A] text-white pt-14 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-semibold">SPT Classes</h2>
          <p className="text-white/70 mt-3 leading-6 text-sm">
            Empowering students through certified education programs,
            expert faculty, and structured learning experiences.
          </p>
        </div>

        {/* CONTACT HOURS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Hours</h3>
          <p className="text-white/80 text-sm">
            <strong>Mon – Sat:</strong> 9:00 AM – 6:00 PM
          </p>
          <p className="text-red-300 mt-1 text-sm">
            <strong>Sunday:</strong> Closed
          </p>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <Link to="/courses" className="hover:text-white transition">
                NIELIT Certified Courses
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition">
                Programming Courses
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition">
                Skill Development Programs
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition">
                Professional & Career Courses
              </Link>
            </li>
          </ul>
        </div>

        {/* MAP */}
        <div className="md:col-span-2 md:pl-10">
          <h3 className="text-lg font-semibold mb-3">Find Us</h3>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028270026173!2d86.2028676!3d22.8045666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4c6b6b0e5a1%3A0x2a6c3b6c6e2c6c6!2sJamshedpur!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-40 rounded-xl border border-white/20 shadow-lg"
            loading="lazy"
            title="Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 underline block mt-2 text-sm"
          >
            View on Google Maps
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
        © 2025 SPT Classes. All rights reserved.
        <br />
        Designed & Built with <span className="text-red-400">❤️</span> by{" "}
        <span className="text-white font-medium">Shikom Solutions</span>
      </div>
    </footer>
  );
}
