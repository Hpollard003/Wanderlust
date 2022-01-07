import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FriendList from "./FriendsList";

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
  }, []); 


  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light">
      <section className="container px-5">
        <FriendList
          friends={friends}
        />
      </section>
    </div>
  );
};

export default Friends;
