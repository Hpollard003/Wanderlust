import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Journal from "../components/Journal/Journal";

export const Journals = () => {
  return (
    <div>
      <Outlet />
      <Journal />
      <Footer />
    </div>
  );
};

export default Journals;
