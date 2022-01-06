import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FriendList = ({ friends, removeFriend, toggleOpt }) => {
  // const [myFriends, setMyFriends] = useState([]);
  // const [travelBuddy , setTravelBuddy] = useState(null)
  // const { id } = useParams()   

  // useEffect(() => {
  //   fetch(`/users/${id}`) 
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setMyFriends(data.invitations.map((invitation) => invitation.friend_id))  
  //       filter()
  //       console.log(myFriends)
  //     }); 
  // }, []); 

  // const filter = () => { 
  //   const newFriends = friends.filter((user) => user.id === myFriends.map(pal => pal)); 
  //   setMyFriends(newFriends);    
  //   console.log(newFriends)

  // };


  return (
    <div>
      <h1>My Friends</h1>
      {/* {myFriends.map((friend, ind) => (
        <h5 key={ind}>{friend.username}</h5> 
      ))} */}
    </div>
  );
};

export default FriendList;
