import Header from "./Header.jsx";
import HeroComponent from "./HeroComponent.jsx";


import Courses from "./Courses.jsx";     // default export → no {}
import Footer from "./Footer.jsx";       // default export → no {}
import ChooseUs from "./ChooseUs.jsx";   // default export
import LatestNews from "./LatestNews.jsx";
import ReviewComponent from "./Review.jsx";
import FaqComponent from "./Faq.jsx";
import { useRef } from "react";
// import HeroComponent2 from "./HeroComponent2.jsx";
import BreadCrumbs from "./BreadCrumbs.jsx";
import OurStars from "./OurStars.jsx";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm.jsx";





export default function LandingPage() {
  const announcementsRef=useRef(null);
  const faqRef = useRef(null);          // ✅ NEW
  const showRegister=useSelector((state)=>state?.RegistrationForm?.showRegisterForm);
  console.log(showRegister)

  return (
    <div className="h-fit w-[100vw] relative">
      {/* http://localhost:3000 */}
      <Header />
      <BreadCrumbs courseTitle={""}/>
      <HeroComponent ref={announcementsRef}/>
      {/* <HeroComponent2 ref={announcementsRef}/> */}
      <LatestNews ref={announcementsRef}/>
      <ChooseUs />
      <Courses flag={true} courseName={"NIELIT Certified Courses"} length={6}/>
      <ReviewComponent />
      <OurStars />  

      <FaqComponent ref={faqRef} />     {/* ✅ attach ref */}
      <Footer />

      {showRegister &&
        <div className="w-[100vw] h-[100vh] backdrop-blur-xl fixed inset-0 z-[999] flex justify-center pb-6 pt-6">
          <RegisterForm/>
        </div>
      }
    </div>
  );
}
