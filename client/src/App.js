import React, { useState, useEffect } from "react";
import Auth from "./AuthenticatedApp";
import UnAuth from "./UnAuthenticatedApp";
import loadingGif from "./assets/loadingDOTS.gif";
import Navbar from "./components/Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setAuthChecked(!authChecked);
          setCurrentUser(data);
        });
      } else {
        setAuthChecked(!authChecked);
      }
    });
  }, []);

  if (!authChecked) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="display-1">
          <img src={loadingGif} alt="Loading..." />
        </h1>
      </div>
    );
  } else
    return (
      <>
        <div>
          {currentUser ? (
            <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
          ) : (
            <UnAuth setCurrentUser={setCurrentUser} />
          )}
        </div>
      </>
    );
}

export default App;
