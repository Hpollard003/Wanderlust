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
  const nav = useNavigate();
  const { friend_id, username, id } = useParams();

  useEffect(() => {
    fetch(`/users/${friend_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setJournals(data.journals);
      });
  }, []);

  return (
    <>
      <Outlet />
      <h1 className="text-center text-gradient">Journals </h1>
      <button onClick={() => nav(`/${username}/${id}/friends/`)} 
        className='btn btn-danger position-absolute end-0'>Close Journals</button>
      <div className="page-list">
        {journals.map((journal, ind) => (
          <div className="col-4 p-3" key={ind} id={journal.id}>
            <MDBCard
              background=""
              className="text-light bg-transparent page"
              id={journal.id}
              onClick={(e) => {
                nav(`${e.target.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <MDBCardImage overlay src={Jgif} alt="..." id={journal.id} />
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
