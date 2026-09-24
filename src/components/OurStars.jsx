import { motion } from "framer-motion";
import { Award, Star, Sparkles } from "lucide-react";

const stars = [
  {
    name: "Maria Rodriguez",
    course: "Python & Web Development",
    grade: "A+",
    avatar: "https://i.pravatar.cc/150?img=12",
    certificate: "/c1.jpeg",
  },
  {
    name: "Shivam Uttam",
    course: "Course On Computer Concepts",
    grade: "A",
    avatar: "https://i.pravatar.cc/150?img=3",
    certificate: "https://imgv2-1-f.scribdassets.com/img/document/461014244/original/83d2b3f891/1681930874?v=1", // ✅ A4 certificate
    isA4: true,
  },
  {
    name: "Sarah Johnson",
    course: "Digital Marketing & Tally",
    grade: "A+",
    avatar: "https://i.pravatar.cc/150?img=32",
    certificate: "/c3.jpeg",
  },
];

export default function OurStars() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#eef4ff] via-[#f6f9ff] to-white">

      {/* Heading */}
      <div className="flex flex-col items-center justify-center mb-24 text-center">
        <div className="flex items-center gap-3 mb-4 text-[#2563eb]">
          <Sparkles size={32} />
          <span className="text-sm font-semibold tracking-widest uppercase">
            Student Excellence
          </span>
        </div>

        <h2 className="text-[46px] font-extrabold text-[#0b1320]">
          Our Top Performers
        </h2>

        <p className="mt-4 max-w-xl text-[#6b7280] text-lg">
          Celebrating dedication, consistency, and outstanding academic achievements
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 px-10">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative bg-white rounded-[32px]
              border border-blue-100
              shadow-[0_30px_80px_rgba(30,64,175,0.15)]
              overflow-hidden
            "
          >
            {/* Ribbon */}
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Award size={16} />
              Certified
            </div>

            {/* Student Info */}
            <div className="flex items-center gap-6 p-10">
              <img
                src={s.avatar}
                alt={s.name}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-[#dbeafe]"
              />

              <div className="flex-1">
                <h3 className="text-[20px] font-semibold text-[#0b1320]">
                  {s.name}
                </h3>
                <p className="text-[15px] text-[#6b7280] mt-1">
                  {s.course}
                </p>

                <div className="flex items-center gap-1 text-[#f5b301] mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f5b301" stroke="none" />
                  ))}
                </div>
              </div>

              <span className="bg-gradient-to-r from-[#f5b301] to-[#facc15] text-white text-sm font-bold px-5 py-2 rounded-full shadow-md">
                {s.grade}
              </span>
            </div>

            {/* Divider */}
            <div className="px-10">
              <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#6366f1] to-[#9333ea]" />
            </div>

            {/* CERTIFICATE — FIXED HEIGHT (ALL SAME) */}
            <div className="p-10">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="
                  relative bg-white
                  rounded-[22px]
                  border border-[#e5e7eb]
                  shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                  h-[260px]            /* 🔒 SAME HEIGHT FOR ALL */
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                <img
                  src={s.certificate}
                  alt="Certificate"
                  className={`
                    object-contain
                    ${s.isA4
                      ? "max-h-[230px] w-auto"   /* 📄 A4 scaled DOWN */
                      : "w-full h-full"}         /* 🖼 landscape fills */
                  `}
                />
              </motion.div>

              <p className="text-center text-sm text-[#6b7280] mt-6">
                Issued by{" "}
                <span className="font-semibold text-[#0b1320]">
                  SPT Classes Academy
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
