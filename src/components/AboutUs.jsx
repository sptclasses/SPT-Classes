import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";

const AboutUs = () => {
  const navigate = useNavigate();
  const showRegister=useSelector((state)=>state?.RegistrationForm?.showRegisterForm);

  const highlights = [
    {
      icon: "🎓",
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of real-world experience in their domains."
    },
    {
      icon: "📚",
      title: "80+ Courses",
      description: "Comprehensive curriculum covering programming, skill development, and professional certifications."
    },
    {
      icon: "🏆",
      title: "NIELIT Certified",
      description: "Government-recognized programs that add credibility to your resume and career."
    },
    {
      icon: "💼",
      title: "Placement Support",
      description: "Dedicated career guidance, interview preparation, and job placement assistance."
    },
    {
      icon: "🌟",
      title: "1000+ Students",
      description: "Join a thriving community of learners who have transformed their careers with us."
    },
    {
      icon: "⚡",
      title: "Hands-on Learning",
      description: "Practical projects and real-world applications to ensure job-ready skills."
    }
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We believe in delivering high-quality education that prepares students for real-world challenges and opportunities."
    },
    {
      title: "Student Success",
      description: "Your success is our success. We are committed to supporting every student throughout their learning journey."
    },
    {
      title: "Innovation",
      description: "We continuously update our curriculum to stay aligned with the latest industry trends and technologies."
    },
    {
      title: "Accessibility",
      description: "Making quality education accessible and affordable for everyone, regardless of their background."
    }
  ];

  const handleExploreCourses = () => {
    navigate("/courses");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-white">
      <Header />
      <BreadCrumbs/>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-semibold mb-4">
            About SPT Classes
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Futures Through
            <br />
            <span className="text-orange-400">Quality Education</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sharp Programmer Technology (SPT) Classes is a premier educational institution dedicated to
            providing industry-relevant training and government-certified programs that transform careers.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">1000+</div>
              <div className="text-blue-200 text-sm mt-1">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">80+</div>
              <div className="text-blue-200 text-sm mt-1">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">10+</div>
              <div className="text-blue-200 text-sm mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide accessible, high-quality education that empowers individuals with the
                skills and knowledge needed to excel in today's competitive job market. We bridge
                the gap between academic learning and industry requirements through practical,
                hands-on training.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the leading educational institution recognized for excellence in
                technical training and skill development. We envision a future where every student
                has access to quality education that opens doors to meaningful career opportunities
                and personal growth.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose SPT Classes?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine industry expertise, modern teaching methods, and comprehensive support
              to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl
                         border border-gray-100 hover:border-blue-200
                         transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do at SPT Classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl
                         border border-blue-100 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700
                                flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-blue-100 text-lg">
            Join thousands of students who have transformed their careers with SPT Classes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleExploreCourses}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600
                             rounded-xl font-semibold shadow-xl transition-all duration-300
                             hover:scale-105"
            >
              Explore Courses
            </button>
            <button
              onClick={handleContactUs}
              className="px-8 py-4 bg-white/10 hover:bg-white/20
                             border-2 border-white/30 rounded-xl font-semibold
                             backdrop-blur-xl transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {showRegister &&
      <div className="w-[100vw] h-[100vh] backdrop-blur-xl fixed inset-0 z-[999] flex justify-center pb-6 pt-6">
          <RegisterForm/>
      </div>
      }
    </div>
  );
};

export default AboutUs;
