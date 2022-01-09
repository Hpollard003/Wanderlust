import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FriendRequests from "./FriendRequests";
import {
  MDBCard,
  MDBBadge,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";


const FriendList = ({ friends , sendInvite }) => {
  const [myFriends, setMyFriends] = useState([]);
  const [myFriendRequests, setMyFriendRequests] = useState([]);
  const [numberOfFriends, setNumberOfFriends] = useState(0)
  const nav = useNavigate();
  const { id , numOfFriends, username } = useParams();

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMyFriends(data.friends);
        setMyFriendRequests(data.pending_friends);
        
        console.log(myFriendRequests);
      });
  }, [numOfFriends, id]);

  const addFriendsHandler = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "PATCH",
      body: JSON.stringify({ invitation_id: event.target.id }),
      headers: { "Content-Type": "application/json" },
    }).then((data) => {
      nav(`/${username}/${id}/friends/${myFriends.length + 1}`)
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

      <div className="row">
        {myFriends.map((friend, ind) => (
          <div
            className="col-4 px-4 position-relative"
            key={ind}
            id={friend.id}
          >
            <MDBCard
              className="text-light bg-transparent p-1 rounded-circle border-0"
              id={friend.id}
            >
              <div className="position-absolute top-0 start-100 translate-middle text-center ">
                Journals
                <MDBBadge className="badge rounded-pill bg-info" notification>
                  {friend.journals.length}
                </MDBBadge>
              </div>
              <MDBCardImage
                overlay
                height="290px"
                src={friend.image}
                alt="..."
                id={friend.id}
                title={`${friend.username}`}
                className="rounded-circle border border-5 border-top-0 border-end-0 shadow-lg bg-dark"
              />
              <MDBCardOverlay id={friend.id} className="text-center" title={`${friend.username}`}>
                <h3 id={friend.id} className="friend-text-gradient mb-5 py-4">
                  {friend.username}
                </h3>
                <br></br>
                <br></br>
                <br></br>
                <button
                  id={friend.invite_id}
                  className="btn btn-danger btn-sm p-2 mx-2 my-5 rounded-circle"
                  onClick={unfriend}
                  title="Unfriend"
                >
                  <p
                    id={friend.invite_id}
                    className="fas fa-user-times px-1 my-1"
                  ></p>
                </button>
                <button
                  id={friend.id}
                  className="btn btn-info btn-sm p-2 mx-3 rounded-circle"
                  onClick={(e) => {
                    nav(`journals/${e.target.id}`);
                    window.scrollTo(0, 0);
                  }}
                  title={`${friend.username}'s Journals`}
                >
                  <p id={friend.id} className="fas fa-book px-2 my-1"></p>
                </button>
              </MDBCardOverlay>
            </MDBCard>
          </div>
        ))}
      </div>
    </>
  );
}

export default FriendList;
