import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Earfy from "../assets/earthy.gif";

const FriendList = ({ friends, removeFriend, toggleOpt }) => {
  const [myFriends, setMyFriends] = useState([]);
  
  

  return (
    <div>
      <section className="d-inline-flex">
        {" "}
        <img
          src={Earfy}
          alt="Earfy is missing"
          height="250"
          width="300"
          className="rounded rounded-pill"
        />
        <section>
          <h1 className="friends-text-gradient">My Friends</h1>
          {friends.map((friend, ind) => (
            <h5 key={ind}>{friend.username}</h5>
          ))}
        </section>
      </section>
    </div>
  );
};

export default FriendList;
