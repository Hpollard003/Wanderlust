import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Earfy from "../../assets/earthy.gif";

const FriendList = ({ friends, removeFriend, toggleOpt }) => {
  const [myFriends, setMyFriends] = useState([]);
  const [myFriendRequests, setMyFriendRequests] = useState([]);
  const { id } = useParams()
  
  useEffect(() => { 
    fetch(`/users/${id}`)
      .then((resp) => resp.json()) 
      .then((data) => {
        setMyFriends(data.friends)
        setMyFriendRequests(data.pending_friends)
        console.log(myFriendRequests) 
      }); 
  }, []); 

  return (
    <div>

      <div role="alert" className="alert alert-warning">
        {myFriendRequests.map((friendRequest , ind) => (
          <div>
          <p>{friendRequest.username}</p>
          <button>Accept</button>
          <button>Reject</button>
          </div>
        ))}  
      </div>
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
          {myFriends.map((friend, ind) => (
            <h5 className="m-5" key={ind}>
              {friend.username}
            </h5>
          ))}
        </section>
      </section>
    </div>
  );
};

export default FriendList;
