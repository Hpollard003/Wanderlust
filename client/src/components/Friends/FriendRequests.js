import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { MDBBadge } from "mdb-react-ui-kit";

const FriendRequests = ({myFriendRequests, setMyFriendRequests, setMyFriends, myFriends }) => {
    const { id } = useParams()
    const [toggled, setToggled] = useState(false);


    const removeFriend = (event) => {
        fetch(`/users/${id}/invitations/${event.target.id}`, {
          method: "DELETE",
        })
          .then(() => {
            filter(event.target.id);
          });
      };
      const filter = (id) => {
        const newFriends = myFriendRequests.filter((user) => user.invite_id !== parseInt(id));
        setMyFriendRequests(newFriends);
        // console.log(newFriends)
      };

      const addFriendsHandler = (event) => {
        fetch(`/users/${id}/invitations/${event.target.id}`, {
          method: "PATCH",
          body: JSON.stringify({invitation_id : event.target.id}), 
          headers: { "Content-Type": "application/json" },
        })
        //   .then((response) => response.json())
          .then((data) => {
            filter(event.target.id);
            setMyFriends((prevFriends) => [
              ...prevFriends,
              { id: data.id, ...myFriendRequests },
            ]);
            console.log(myFriends);
          });
      };

      const toggler = () => {
        toggled ? setToggled(false) : setToggled(true);
      };

    return (
              <div>
        <button
        type="button"
        className="btn position-relative"
        onClick={toggler}
      >
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
                  <ul
                    className="p-1 mx-5 rounded-pill border-4 border-info border-top-0 border-start-0 position-fixed end-0"
                  >
                    {myFriendRequests.map((friendRequest, ind) => (
                      <li key={ind} className=" m-1 list-group-item">
                        <p className="fst-italic m-1 mx-5 fw-bold col">
                          {" "}
                          {friendRequest.username}
                        </p>
                        <section className="mx-5">
                          <button className="btn btn-info btn-sm"  id={friendRequest.invite_id}  onClick={addFriendsHandler}>Accept</button>{" "}
                          <button className="btn btn-danger btn-sm" id={friendRequest.invite_id} onClick={removeFriend}>Reject</button>
                        </section>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            
       
    )
}

export default FriendRequests
