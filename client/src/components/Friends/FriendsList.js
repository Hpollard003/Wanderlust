import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Earfy from "../../assets/earthy.gif";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

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
  }, []);

  const addFriendsHandler = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "PATCH",
      body: JSON.stringify({ invitation_id: event.target.id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        filter(event.target.id);
        setMyFriends((prevFriends) => [
          ...prevFriends,
          { id: data.id, ...friends },
        ]);
        console.log(myFriends);
      });
  };

  const unfriend = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "DELETE",
    }).then(() => {
      // filter(event.target.id);
    });
  };

  const filter = (id) => {
    const newFriends = myFriendRequests.filter(
      (user) => user.invite_id !== parseInt(id)
    );
    setMyFriendRequests(newFriends);
    // console.log(newFriends)
  };

  return (
    <>
      <div className="d-inline-flex">
        <h1 className="friends-text-gradient">Friends</h1>
        <FriendRequests
          myFriendRequests={myFriendRequests}
          setMyFriendRequests={setMyFriendRequests}
          setMyFriends={setMyFriends}
          myFriends={myFriends}
          addFriendsHandler={addFriendsHandler}
          filter={filter}
        />
      </div>

      <div className="row">
        {myFriends.map((friend, ind) => (
          <div className="col-4 p-3" key={ind} id={friend.id}>
            <MDBCard
              background=""
              className="text-light bg-transparent"
              id={friend.id}
              onClick={(e) => {
                // nav(`${e.target.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <MDBCardImage overlay src={Earfy} alt="..." id={friend.id} />
              <MDBCardOverlay id={friend.id}>
                <MDBCardTitle id={friend.id} className="friend-text-gradient">
                  <header>{friend.username}</header>
                </MDBCardTitle>
              </MDBCardOverlay>
              <MDBCardFooter className="text-light footer-bg-gradient"></MDBCardFooter>
            </MDBCard>
              <button id={friend.invite_id} className="btn btn-danger btn-sm p-1"onClick={unfriend}>UnFriend</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendList;
