import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FriendRequests from "./FriendRequests";
import defaultPfp from "../../assets/Default.jpg"
import {
  MDBCard,
  MDBBadge,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

const FriendList = ({ friends, sendInvite }) => {
  const [myFriends, setMyFriends] = useState([]);
  const [myFriendRequests, setMyFriendRequests] = useState([]);
  const nav = useNavigate();
  const { id, numOfFriends, username } = useParams();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMyFriends(data.friends);
        setMyFriendRequests(data.pending_friends);

        console.log(myFriendRequests);
      });
  }, [numOfFriends, friends]);

  const addFriendsHandler = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "PATCH",
      body: JSON.stringify({ invitation_id: event.target.id }),
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      nav(`/${username}/${id}/friends/${myFriends.length + 1}`);
    });
  };

  const unfriend = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "DELETE",
    }).then(() => {
      filter(event.target.id);
    });
  };

  const filter = (id) => {
    const newFriends = myFriends.filter(
      (user) => user.invite_id !== parseInt(id)
    );
    setMyFriends(newFriends);
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
          sendInvite={sendInvite}
        />
      </div>
      {myFriends.length === 0 ? (
        <>
          <h3 className="text-center border border-5 rounded-pill bg-green px-3 py-2 my-4"
          style={{ width: "50rem" , marginLeft: "auto", marginRight: "auto"}}>
            Oh Dang Looks Like You Have No Friends
          </h3>
          <p className="text-center border border-5 rounded-pill bg-green px-3 py-2"
          style={{ width: "30rem" , marginLeft: "auto", marginRight: "auto"}}>
            Click the Search Icon and try to find some.
          </p>
        </>
      ) : null}
      <div className="row">
        {myFriends.map((friend, ind) => (
          <div
            className="col-4 px-4 position-relative py-5"
            key={ind}
            id={friend.id}
          >
            <MDBCard
              className="text-light bg-transparent p-1 rounded-circle border-0"
              id={friend.id}
            >
              <MDBCardImage
                overlay
                height="300"
                width={300}
                src={
                  friend.image
                    ? friend.image
                    : defaultPfp
                }
                alt="..."
                id={friend.id}
                title={`${friend.username}`}
                className="rounded-circle border border-5 border-top-0 border-end-0 shadow-lg"
              />
              <MDBCardOverlay
                id={friend.id}
                className="text-center"
                title={`${friend.username}`}
                onClick={(e) => {
                  nav(`journals/${e.target.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <h3 id={friend.id} className="text-gradient mb-5 py-4">
                  {friend.username}
                </h3>
                <br></br>
                <br></br>
                <div
                  className="position-relative top-0 start-50 translate-middle text-center mt-5 text-dark"
                  id={friend.id}
                  onClick={(e) => {
                    nav(`journals/${e.target.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  Journals {" "}
                  <MDBBadge
                    className="badge rounded-pill bg-info p-2 px-4 text-light"
                    notification
                    id={friend.id}
                    title={`${friend.username}'s Journals`}
                  >
                    {friend.journals.length}
                  </MDBBadge>
                </div>
              </MDBCardOverlay>
            </MDBCard>
            <button
              id={friend.invite_id}
              className="btn btn-danger btn-sm p-2 rounded-circle"
              onClick={unfriend}
              title="Unfriend"
            >
              <p
                id={friend.invite_id}
                className="fas fa-user-times px-1 my-1"
              ></p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendList;
