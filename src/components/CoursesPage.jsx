import { useLocation } from "react-router-dom";
import CoursesHero from "./CoursesHero";
import Header from "./Header";
import Courses from "./Courses";
import ComapnyReviews from "./CompanyComment";
import MentorsInfo from "./MentorsInfo";
import Footer from "./Footer";
import BreadCrumbs from "./BreadCrumbs";
import { useSelector } from "react-redux";
import RegisterForm from "./RegisterForm";


export default function CoursesPage(){
    const location=useLocation();
    const tabData=location?.state?.tab || "NIELIT Certified Courses";
    console.log("Tab Data"+tabData)
    const showRegister=useSelector((state)=>state?.RegistrationForm?.showRegisterForm);
    return(
        <div>
            <Header/>
            <BreadCrumbs courseTitle={""}/>
            <CoursesHero/>
            <Courses flag={false} courseName={tabData} length={15}/>
            <MentorsInfo/>
            <ComapnyReviews/>
            <Footer/>
            {showRegister &&
                <div className="w-[100vw] h-[100vh] backdrop-blur-xl fixed inset-0 z-[999] flex justify-center pb-6 pt-6">
                    <RegisterForm/>
                </div>
                }
        </div>
    )
}