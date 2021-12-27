import React from "react";


const Logout = ({setCurrentUser}) => {
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null)
    });
  };

  return (
    <div>
      <a
        href="/"
      >
        <button className="shadow-lg btn btn-outline-danger border-top-0 border-bottom-0 border-danger border-2 mx-2 fw-bold" onClick={handleLogout}>
          Logout
        </button>
      </a>
    </div>
  );
}

export default Logout;