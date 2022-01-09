import React, { useState, useEffect } from "react";
import Auth from "./AuthenticatedApp";
import UnAuth from "./UnAuthenticatedApp";
import Footer from "./components/Footer";



function App() {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setCurrentUser(data);
        });}
    });
  }, []);


  return (
    <div>
      {currentUser ? (
        <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
        ) : (
          <UnAuth setCurrentUser={setCurrentUser} />
          )}
          <Footer currentUser={currentUser}/>
    </div>
  );
}

export default App;
