import React, { useState, useEffect } from "react";
import FriendList from "./FriendsList";
import Search from "./Search";

export const Friends = ({currentUser}) => {
  const [friends, setFriends] = useState([]);
  const [toggleOpt, setToggleOpt] = useState(false);

  useEffect(() => {
    fetch("/users")
    .then((resp) => resp.json())
    .then((data) => setFriends(data))
  } , [])

  const sendInvite = (e) => {
    fetch(`/users/${currentUser.id}/invitations`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"ids": { 
        "id1" : currentUser.id, 
        "id2" :  e.target.id
      }})
    })
  }

  const followUser = (e) => {
    fetch(`/users/${currentUser.id}/invitations`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"ids": { 
        "id1" : e.target.id, 
        "id2" :  currentUser.id
      }})
    })
  }


  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light position-relative">
      <section className="container p-5 mx-4">
        <button onClick={optionsToggler} className={`btn ${!toggleOpt ? "btn-green" : "btn-danger"} btn-sm position-absolute mx-5 end-0 `} title="Search">{!toggleOpt ? <i className="fas fa-search"></i> : <i className="far fa-times-circle"></i>}</button>
      <div hidden={!toggleOpt} className=" m-5 w-50">
        <Search friends={friends} sendInvite={sendInvite} followUser={followUser}/>
      </div>
        <FriendList
          friends={friends}
          sendInvite={sendInvite}
        />
      </section>
    </div>
  );
};

export default Friends;
