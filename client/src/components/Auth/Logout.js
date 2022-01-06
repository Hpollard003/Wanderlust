import React from "react";
import { Link } from "react-router-dom";



const Logout = ({setCurrentUser}) => {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null)
    });
  };

  return (
    <div>
      <Link to="/" className="nav-link text-danger" onClick={handleLogout}>
        <h3>
      <i className="fas fa-power-off"></i></h3>
      </Link>
    </div>
  );
}

export default Logout;