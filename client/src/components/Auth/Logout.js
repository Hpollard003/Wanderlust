import React from "react";
import { Link } from "react-router-dom";



const Logout = ({setCurrentUser , currentUser}) => {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null)
    });
  };

  return (
    <div className="d-inline-flex">
        <p className="my-2 p-1 text-light">{currentUser.username}</p>  
      <Link to="/" className="nav-link text-danger" onClick={handleLogout}>
        
      <h3><i className="fas fa-power-off"></i></h3>
      </Link>
    </div>
  );
}

export default Logout;