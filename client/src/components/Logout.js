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
        <button className="" onClick={handleLogout}>
          Logout
        </button>
      </a>
    </div>
  );
}

export default Logout;