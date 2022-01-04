import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export const JournalCard = (props) => {
  const nav = useNavigate();

  const renderjournalList = () => {
    return (
      <div className="row">
        {props.journals.map((journal, ind) => (
          <div
            className="col-4 p-3"
            key={ind}
            id={journal.id}
          >
            <MDBCard background="dark" className="text-light" id={journal.id} onClick={(e) => {
              nav(`/journals/${e.target.id}`);
            }}>
              <MDBCardImage
                overlay
                src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp"
                alt="..."
                id={journal.id}
              />
              <MDBCardOverlay id={journal.id}>
                <MDBCardTitle id={journal.id}>{journal.title}</MDBCardTitle>
              </MDBCardOverlay>
            </MDBCard>
            <MDBCardFooter >
              <button
                onClick={props.removeItem}
                id={journal.id}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
              <a
                className="btn btn-outline-primary"
                href={`/journals/edit/${journal.id}`}
              >
                Edit
              </a></MDBCardFooter>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <ul>{renderjournalList()}</ul>
    </section>
  );
};
export default JournalCard;
