import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./AuthenticatedApp";
import UnAuth from "./UnAuthenticatedApp";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [authChecked , setAuthChecked] = useState(null);


  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentUser(data);
          // setAuthChecked(true)
        });}
      // } else {
      //   setAuthChecked(false);
      // }
    });
  }, []);

  // if (!authChecked) {
  //   return <div></div>
  // }

  return (
    <div>
      {currentUser ? (
        <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
        ) : (
          <UnAuth setCurrentUser={setCurrentUser} />
          )}
    </div>
  );
}

export default App;
