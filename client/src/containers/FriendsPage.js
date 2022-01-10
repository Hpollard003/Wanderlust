import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Friends from "../components/Friends/Friends";

const FriendsPage = ({ currentUser }) => {
  return (
    <div>
      <Outlet />
      <Friends currentUser={currentUser} />
      <Footer />
    </div>
  );
};

export default FriendsPage;
