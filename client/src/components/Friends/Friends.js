import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FriendList from "./FriendsList";
import Search from "./Search";

export const Friends = ({currentUser}) => {
  const [friends, setFriends] = useState([]);
  const [toggleOpt, setToggleOpt] = useState(false);
  const { id, numOfFriends, username } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    fetch("/users")
    .then((resp) => resp.json())
    .then((data) => setFriends(data.filter(friend => friend.id !== currentUser.id)))
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
    fetch(`/invites/${currentUser.id}`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ 
        "friend_id" : e.target.id, 
        "user_id" : currentUser.id,
        "confirmed": true
      })
    }).then((resp)=> resp.json())
      .then(() => {
        nav(`/${username}/${id}/friends/${parseInt(numOfFriends) + 1}`);
      })
      .catch((err) => console.log(err))
    }
  


  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light position-relative">
      <section className="container p-5 mx-4">
        <button onClick={optionsToggler} className={`btn ${!toggleOpt ? "btn-green" : "btn-danger"} btn-sm position-absolute ms-3 start-0 `} title="Search">{!toggleOpt ? <i className="fas fa-search"></i> : <i className="far fa-times-circle"></i>}</button>
      <div hidden={!toggleOpt} className=" m-5 w-50">
        <Search friends={friends} sendInvite={sendInvite} followUser={followUser} currentUser={currentUser}/>
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
