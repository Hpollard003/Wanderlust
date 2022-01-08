import React, { useState, useEffect } from "react";
import FriendList from "./FriendsList";
import Search from "./Search";

export const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [toggleOpt, setToggleOpt] = useState(false);


  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json()) 
      .then((data) => {
        setFriends(data)
        // console.log(friends)
      }); 
  }, [friends]); 


  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light position-relative">
      <section className="container p-5 mx-4">
        <button onClick={optionsToggler} className={`btn ${!toggleOpt ? "btn-green" : "btn-danger"} btn-sm position-absolute mx-5 end-0 `}>{!toggleOpt ? <i className="fas fa-search"></i> : <i className="far fa-times-circle"></i>}</button>
      <div hidden={!toggleOpt} className=" m-5 w-50">
        <Search/>
      </div>
        <FriendList
          friends={friends}
        />
      </section>
    </div>
  );
};

export default Friends;
