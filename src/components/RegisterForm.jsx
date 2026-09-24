import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { setDetails, setShowRegisterFrom } from "../redux/Slices/registerFormSlice";
import axios from "axios";
import { ADMIN_ENDPOINTS, USER_ENDPOINTS } from "./endpoint";
import toast from "react-hot-toast";

/* ================= OPTIONS ================= */

const ageOptions = [
  { value: "under-16", label: "Under 16" },
  { value: "16-18", label: "16 – 18" },
  { value: "18-22", label: "18 – 22" },
  { value: "22-plus", label: "22+" },
];

const domainOptions = [
  { value: "web-dev", label: "Web Development" },
  { value: "app-dev", label: "App Development" },
  { value: "dsa", label: "Data Structures & Algorithms" },
  { value: "data-science", label: "Data Science / AI" },
  { value: "ml", label: "Machine Learning" },
  { value: "cyber", label: "Cyber Security" },
  { value: "cp", label: "Competitive Programming" },
  { value: "not-sure", label: "Not sure yet" },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "0.75rem",
    padding: "2px",
    borderColor: state.isFocused ? "#2563eb" : "#d1d5db",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(37, 99, 235, 0.3)"
      : "none",
    "&:hover": { borderColor: "#2563eb" },
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),

  menuList: (base) => ({
    ...base,
    maxHeight: "200px",
    overflowY: "auto",
  }),
};

/* ================= REGISTER FORM ================= */

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState(null);
  const [guidance, setGuidance] = useState(false);
  const [needGuidance, setNeedGuidance] = useState(false);


  ////// error stuff
  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [domainError, setDomainError] = useState(false)

  const dispatch = useDispatch();
  let hasError=false;

  useEffect(() => {
    if (domain?.value === "not-sure") {
      setGuidance(true);
    } else {
      setGuidance(false);
      setNeedGuidance(false);
    }
  }, [domain]);

  async function submitDetails(e) {
    try {
      e.preventDefault();
      e.stopPropagation();

      if (name.trim() === "") {
        setNameError(true);
        hasError=true;
      }
      if (!age) {
        setAgeError(true)
        hasError=true;
      }
      if(emailId.trim()===""){
        setEmailError(true)
        hasError=true;
      }else{
        const regexEmailId = /^[a-zA-Z0-9]+@gmail\.(com|in|net|org)$/;
        if (!regexEmailId.test(emailId)) {
          toast.error("Invalid email!");
          hasError=true;
          return;
        }
      }

      if(phoneNumber.trim()===""){
        setPhoneError(true);
        hasError=true;
      }else{
        const regexPhoneNumber = /^[0-9]{10}$/;
        if (!regexPhoneNumber.test(phoneNumber)) {
          toast.error("Invalid phone number!");
          hasError=true;
          return;
        }
      }
      if (!domain) {
        setDomainError(true);
        hasError=true;
      }

      if(hasError) return;

      const obj = {
        studentFullName: name,
        studentPhoneNumber: phoneNumber,
        studentAge: age.value,
        studentEmailId: emailId,
        studentDomain: domain.value,
        needGuidance: needGuidance,
      };

      const sheetData = [
        [name, age.value, emailId, phoneNumber, domain.value, needGuidance],
      ];

      dispatch(setDetails(obj));

      setName("");
      setPhoneNumber("");
      setEmailId("");
      setAge(null);
      setDomain(null);
      setGuidance(false);
      setNeedGuidance(false);

      await axios.post(
        `${ADMIN_ENDPOINTS}/addStudentInfo`,
        { studentDetails: obj },
        { withCredentials: true }
      );

      await axios.post(
        `${USER_ENDPOINTS}/addDataInSheet`,
        { values: sheetData },
        { withCredentials: true }
      );

      toast.success("Data saved successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error while submitting registration details", error);
    }
  }

  return (
    <div className="relative z-60 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fadeIn">

      {/* CLOSE BUTTON */}
      <div
        onClick={() => { dispatch(setShowRegisterFrom()) }}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl flex justify-center items-center cursor-pointer"
      >
        ✕
      </div>

      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-2 text-gray-800">
        Begin Your Learning Journey 🚀
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Register to get personalized course guidance from our experts
      </p>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            {nameError && <span className="text-red-500 text-xs">Required Field</span>}
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => {setName(e.target.value); setNameError(false)}}
            placeholder="Enter your name"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Age</label>
            {ageError && <span className="text-red-500 text-xs">Required Field</span>}
          </div>
          <Select
            isSearchable={false}
            options={ageOptions}
            value={age}
            onChange={(e)=>{setAge(e); setAgeError(false)}}
            placeholder="Select age range"
            styles={selectStyles}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            maxMenuHeight={200}
            menuShouldScrollIntoView={false}
            menuShouldBlockScroll={false}
          />
        </div>

        {/* Email */}
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Email</label>
            {emailError && <span className="text-red-500 text-xs">Required Field</span>}
          </div>
          <input
            type="email"
            value={emailId}
            onChange={(e) => {setEmailId(e.target.value); setEmailError(false)}}
            placeholder="you@example.com"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Whatsapp / Phone Number</label>
            {phoneError && <span className="text-red-500 text-xs">Required Field</span>}
          </div>
          <input
            type="tel"
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => {setPhoneNumber(e.target.value); setPhoneError(false)}}
            placeholder="Enter your phone number"
            className="w-full mt-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Domain */}
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-gray-700">Preferred Leraning Domain</label>
            {domainError && <span className="text-red-500 text-xs">Required Field</span>}
          </div>
          <Select
            isSearchable={false}
            options={domainOptions}
            value={domain}
            onChange={(e)=>{setDomain(e); setDomainError(false)}}
            placeholder="Select a domain"
            styles={selectStyles}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            maxMenuHeight={200}
            menuShouldScrollIntoView={false}
            menuShouldBlockScroll={false}
          />
        </div>

        {/* Guidance */}
        <div
          className={`transition-all duration-500 overflow-hidden ${guidance ? "max-h-20 mt-2 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={needGuidance}
              onChange={(e) => setNeedGuidance(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">
              Do you want guidance from our expert{" "}
              <span className="font-semibold">CHANCHAD</span> over a call?
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          onClick={submitDetails}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition"
        >
          Get Course Details
        </button>
      </div>

      <p className="text-xs text-center text-gray-400 mt-4">
        We’ll contact you with personalized guidance and next steps
      </p>
    </div>
  );
}
