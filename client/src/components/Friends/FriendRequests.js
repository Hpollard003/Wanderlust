import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MDBBadge } from "mdb-react-ui-kit";

const FriendRequests = ({
  myFriendRequests,
  setMyFriendRequests,
  addFriendsHandler,
  setMyFriends,
  filter,
  myFriends,
}) => {
  const { id } = useParams();
  const [toggled, setToggled] = useState(false);

  const removeFriend = (event) => {
    fetch(`/users/${id}/invitations/${event.target.id}`, {
      method: "DELETE",
    }).then(() => {
      filter(event.target.id);
    });
  };


  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <div>
      <button type="button" className="btn position-relative" onClick={toggler}>
        {" "}
        <h2 className="fs-1 fas fa-users"> </h2>
        <MDBBadge
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          notification
        >
          {myFriendRequests.length}
        </MDBBadge>
      </button>
      {toggled ? (
        <ul className="p-1 mx-5 rounded-pill ">
          {myFriendRequests.map((friendRequest, ind) => (
            <li key={ind} className=" m-1 ">
              <p className="fst-italic m-1 mx-5 fw-bold col">
                {" "}
                {friendRequest.username}
              </p>
              <section className="mx-5">
                <button
                  className="btn btn-info btn-sm"
                  id={friendRequest.invite_id}
                  onClick={addFriendsHandler}
                >
                  Accept
                </button>{" "}
                <button
                  className="btn btn-danger btn-sm"
                  id={friendRequest.invite_id}
                  onClick={removeFriend}
                >
                  Reject
                </button>
              </section>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default FriendRequests;
