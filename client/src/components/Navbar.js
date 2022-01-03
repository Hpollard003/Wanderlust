import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export const Navbar = ({ setCurrentUser }) => {
  return (
    <div className="nav m-4 hstack gap-5 ">
      <a href="/" className="">
        Wanderlust
      </a>

      <ul className=" nav d-inline-flex position-absolute top-0 end-0 m-3">
        <li className="nav-item ">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="journals">Journals</Link>
        </li>
        <Logout setCurrentUser={setCurrentUser} />
      </ul>
    </div>
  );
};
export default Navbar;
