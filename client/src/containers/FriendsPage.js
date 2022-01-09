import React from "react";
import { Outlet } from "react-router-dom";
import Friends from "../components/Friends/Friends";

const FriendsPage = ({currentUser}) => {
  return (
    <div>
      <Outlet />
      <Friends currentUser={currentUser}/>
    </div>
  );
};

export default FriendsPage;
