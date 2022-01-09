import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import Jgif from "../../assets/journal.gif";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

const FRIEND_JOURNALS = () => {
  const [journals, setJournals] = useState([]);
  const [name , setName] = useState("")
  const nav = useNavigate();
  const { friend_id, username, id , numOfFriends } = useParams();

  useEffect(() => {
    fetch(`/users/${friend_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setName(data.username);
        setJournals(data.journals);
      });
  }, [friend_id, username, id]);

  return (
    <>
      <Outlet />
      <h1 className="text-center text-gradient">Journals </h1>
      <button onClick={() => nav(`/${username}/${id}/friends/${numOfFriends}`)} 
        className='btn btn-danger position-absolute end-0 mx-3'>Close {name}'s Journals</button>
      <div className="page-list">
      {journals.length === 0 ? (
          <>
          <h1 className="text-center my-5 border border-5 rounded-pill bg-green">Click New Journal To Get Started</h1> 
          </>
        ) : null}
        {journals.map((journal, ind) => (
          <div className="p-1" key={ind} id={journal.id}>
            <MDBCard
              className="text-light bg-transparent journal"
              id={journal.id}
              onClick={(e) => {
                nav(`pages/${e.target.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <MDBCardImage overlay className="rounded-3 journal-image" src={Jgif} alt="..." id={journal.id} />
              <MDBCardOverlay id={journal.id}>
                <MDBCardTitle id={journal.id} className="journal-text-gradient">
                  <header id={journal.id} className="m-4 fs-2">{journal.title}</header>
                </MDBCardTitle>
              </MDBCardOverlay>
              <MDBCardFooter className="text-light footer-bg-gradient"></MDBCardFooter>
            </MDBCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default FRIEND_JOURNALS;
