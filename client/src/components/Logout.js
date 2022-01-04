import React from "react";
import { Link } from "react-router-dom";
import logoutGif from "../assets/logout.gif"


const Logout = ({setCurrentUser}) => {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null)
    });
  };

  return (
    <div>
      <Link to="/" className="nav-link text-danger" onClick={handleLogout}>
        <img src={logoutGif}
                        height="40"
                        alt="Logout"
                        className="rounded rounded-circle "
                        loading="lazy"
        />
      </Link>
    </div>
  );
}

export default Logout;