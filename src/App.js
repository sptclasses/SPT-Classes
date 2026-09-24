import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import Login from "./components/Login";
import Browse from "./components/Browse";
// import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Signup from "./components/Signup.jsx";
import CoursesPage from "./components/CoursesPage.jsx";
// import RegisterForm from "./components/RegisterForm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import ParticularCourse from "./components/ParticularCourse.jsx";
import RootLayout from "./components/RootLayout.jsx";
import LibraryPage from "./components/Library.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 👈 IMPORTANT
    children: [
      { index: true, element: <LandingPage /> },
      { path: "Browse", element: <Browse /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
      { path: "Courses", element: <CoursesPage /> },
      { path: "Courses/ParticularCourse", element: <ParticularCourse /> },
      { path: "About", element: <AboutUs /> },
      { path: "Contact", element: <ContactUs /> },
      { path: "Facilities/Library", element: <LibraryPage /> }
    ],
  },
]);



function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      autoResize: false, // IMPORTANT with routing
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
