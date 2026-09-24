import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast from "react-hot-toast";
import BreadCrumbs from "./BreadCrumbs";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ ADDED

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // ✅ UPDATED: EMAIL CONNECTED (LOGIC SAME AS BEFORE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://spt-classes-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Thank you for contacting us! We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      content: "support@sptclasses.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: "📞",
      title: "Call Us",
      content: "+91 9289011480",
      subtitle: "Mon - Sat, 9:00 AM - 6:00 PM",
    },
    {
      icon: "📍",
      title: "Visit Us",
      content: "Jamshedpur, Jharkhand",
      subtitle: "India",
    },
  ];

  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer 80+ courses including NIELIT certified programs, programming courses, skill development, and professional certifications.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we provide dedicated placement support, interview preparation, and career guidance to all our students.",
    },
    {
      question: "Are your courses government certified?",
      answer:
        "Yes, we offer NIELIT certified courses which are government-recognized and add credibility to your career.",
    },
  ];

  const showRegister=useSelector((state)=>state?.RegistrationForm?.showRegisterForm);

  return (
    <div className="bg-white">
      <Header />
      <BreadCrumbs />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-sm font-semibold mb-4">
            Get In Touch
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We'd Love to
            <br />
            <span className="text-orange-400">Hear From You</span>
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Need guidance on your learning
            path? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl
                         border border-blue-100 transition-all duration-300
                         hover:-translate-y-1 text-center"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-gray-500 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* INPUTS — UNCHANGED */}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading} // ✅ ADDED
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700
                           hover:from-blue-700 hover:to-blue-800
                           text-white font-semibold rounded-xl
                           shadow-lg hover:shadow-xl
                           transition-all duration-300 hover:scale-[1.02]"
                >
                  {loading ? "Sending..." : "Send Message"} {/* ✅ ADDED */}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our support team is available during business hours to help
                  you with any urgent queries.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919289011480"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white
                             rounded-lg font-semibold text-center transition-all duration-300"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:support@sptclasses.com"
                    className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600
                             border-2 border-blue-600 rounded-lg font-semibold
                             text-center transition-all duration-300"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Find Us Here
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028270026173!2d86.2028676!3d22.8045666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4c6b6b0e5a1%3A0x2a6c3b6c6e2c6c6!2sJamshedpur!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SPT Classes Location"
            ></iframe>
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

export default ContactUs;
