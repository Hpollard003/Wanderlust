import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const nav = useNavigate();
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
    }).then((data) => {
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
        <h1 className="friends-text-gradient position-sticky">Friends</h1>
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
              className="text-light bg-transparent rounded-circle"
              id={friend.id}
              onClick={(e) => {
                nav(`${e.target.id}/journals`);
                window.scrollTo(0, 0);
              }}
            >
              <MDBCardImage
                overlay
                height="290px"
                src={friend.image}
                alt="..."
                id={friend.id}
                className="rounded-circle border border-5 border-top-0 border-end-0 shadow-lg bg-dark"
              />
              <MDBCardOverlay id={friend.id} className="">
                <h3 id={friend.id} className="friend-text-gradient my-5 py-4">
                  {friend.username}
                </h3>
              </MDBCardOverlay>
            </MDBCard>
            <button
              id={friend.invite_id}
              className="btn btn-danger btn-sm p-1"
              onClick={unfriend}
            >
              UnFriend
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendList;
