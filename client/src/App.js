import React, { useState, useEffect } from "react";
import './App.css'
// import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./AuthenticatedApp";
import UnAuth from "./UnAuthenticatedApp";
import Footer from "./components/Footer";



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
    });
  }, []);

  // if (!authChecked) {
  //   return <div></div>
  // }

  return (
    <div >
      {currentUser ? (
        <Auth setCurrentUser={setCurrentUser} currentUser={currentUser} />
        ) : (
          <UnAuth setCurrentUser={setCurrentUser} />
          )}
          <Footer/>
    </div>
  );
}

export default App;
