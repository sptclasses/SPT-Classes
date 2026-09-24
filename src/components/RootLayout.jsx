import { Outlet } from "react-router-dom";
import ScrollManager from "./ScrollManager";
// import Header from "./Header";

export default function RootLayout() {
  return (
    <>
      <ScrollManager />
      {/* <Header /> */}
      <Outlet />
    </>
  );
}