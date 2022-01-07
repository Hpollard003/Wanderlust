import React, { useState, useEffect } from "react";
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

  const removeFriend = (event) => {
    fetch(`/invitations/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        filter(event.target.id);
      });
  };

  const addFriendsHandler = (friends) => {
    fetch("/invitations", {
      method: "PATCH",
      body: JSON.stringify(friends), 
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setFriends((prevFriends) => [
          ...prevFriends,
          { id: data.id, ...friends },
        ]);
        console.log(friends);
      });
  };

  const filter = (id) => {
    const newFriends = friends.filter((user) => user.id !== parseInt(id));
    setFriends(newFriends);
  };

  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light">
      <section className="container px-5">
        <button onClick={optionsToggler} className={`btn ${!toggleOpt ? "btn-info" : "btn-danger"} btn-sm position-absolute my-5 end-0`}>{!toggleOpt ? <i className="fas fa-cogs"></i> : <i className="far fa-times-circle"></i>}</button>
        <FriendList
          friends={friends}
          removeFriend={removeFriend}
          toggleOpt={toggleOpt}
        />
      </section>
    </div>
  );
};

export default Friends;
