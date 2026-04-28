import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const Layout = () => {
  return (
    <main className="w-82.5 mx-auto md:w-196.5 lg:w-310">
      <h1 className="h-16 text-4xl flex items-center justify-end font-brassiere text-text-pink text-shadow-title-pink md:text-5xl lg:h-29.5 lg:text-[80px]">
        Melisa Oro
      </h1>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
