import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Earfy from "../../assets/earthy.gif";

import FriendRequests from "./FriendRequests";

const FriendList = ({ friends }) => {
  const [myFriends, setMyFriends] = useState([]);
  const [myFriendRequests, setMyFriendRequests] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMyFriends(data.friends);
        setMyFriendRequests(data.pending_friends);
        console.log(myFriendRequests);
      });
  }, [friends]);



  return (
    <section className="d-inline-flex ">
      <img
        src={Earfy}
        alt="Earfy is missing"
        height="250"
        width="300"
        className="rounded rounded-pill"
      />
      <section>
        <h1 className="friends-text-gradient">My Friends</h1>{" "}
        <FriendRequests
          myFriendRequests={myFriendRequests}
          setMyFriendRequests={setMyFriendRequests}
          setMyFriends={setMyFriends}
          myFriends={myFriends}
        />
          <h2 className="friends-text-gradient border text-center rounded-circle p-1 mx-5 border-3 border-info">{myFriends.length}</h2>
        {myFriends.map((friend, ind) => (
          <div className="m-4" key={ind}>
            <section className="border border-top-0 rounded-pill border-end-0 border-4 border-success text-center">{friend.username}</section>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FriendList;
