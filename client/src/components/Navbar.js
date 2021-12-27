import React from "react";
// import Logout from "./Logout";

export const Navbar = ({setCurrentUser}) => {
  return (
    <div className=""> 
      <ul className="">
        <li className="">
          <a className="" aria-current="page" href="/">Home</a>
        </li>
        <li className="">
          <a className="" href="/profile">
            Profile
          </a>
        </li>
        <li className="">
          <a className="" href="/Journels">
            Create Journal
          </a>
        </li>
        {/* <Logout setCurrentUser={setCurrentUser}/> */}
      </ul>
    </div>
  );
};
export default Navbar;
