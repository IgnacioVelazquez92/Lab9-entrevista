import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-[129vh]">
        <Navbar />
        <div className="min-h-">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
