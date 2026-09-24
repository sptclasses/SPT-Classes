import React, { useState } from "react";
import toast from "react-hot-toast";
// import { forwardRef } from "react";
import { CONTACT_ENDPOINTS } from "./endpoint";

// const FaqComponent = forwardRef((props, ref) => {
//   return (
//     <section ref={ref} className="py-16">
//       {/* FAQ CONTENT */}
//     </section>
//   );
// });

const Faq = () => {
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

  // ✅ UPDATED (EMAIL CONNECTED, LOGIC SAME)
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
      console.log("Mail Button got clicked")
      const res = await fetch(`${CONTACT_ENDPOINTS}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res)

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      toast.success("Thank you for contacting us! We'll get back to you soon.");

      // setFormData({
      //   name: "",
      //   email: "",
      //   phone: "",
      //   subject: "",
      //   message: "",
      // });
      setErrors({});
    } catch (error) {
      console.log(error)
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

  return (
    <div className="bg-white">
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
                {/* --- ALL YOUR INPUTS UNCHANGED --- */}

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
    </div>
  );
};

export default Faq;
