import React from "react";
import { Outlet } from "react-router-dom";
import Friends from "../components/Friends/Friends";

const FriendsPage = () => {
  return (
    <div>
      <Outlet />
      <Friends />
    </div>
  );
};

export default FriendsPage;
