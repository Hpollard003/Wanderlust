import React from "react";
import { useNavigate } from "react-router-dom";
import Jgif from "../../assets/journal.gif";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export const JournalCard = ({journals, toggleOpt, removeItem}) => {
  const nav = useNavigate();

  const renderjournalList = () => {
    return (
      <div className="row shadow">
        {journals.map((journal, ind) => (
          <div className="col-4 p-3" key={ind} id={journal.id}>
        
            <MDBCard
              background=""
              className="text-light bg-transparent"
              id={journal.id}
              onClick={(e) => {
                nav(`${e.target.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <MDBCardImage overlay src={Jgif} alt="..." id={journal.id} />
              <MDBCardOverlay id={journal.id}>
              <div hidden={!toggleOpt} className=" text-end">
              <MDBCardTitle>
            <button
              onClick={removeItem}
              id={journal.id}
              className="btn btn-danger rounded-circle"
            >
              
              <i id={journal.id} className="fas fa-trash" ></i>
            </button>
            <a
              className="btn btn-primary rounded-circle"
              href={`/journals/edit/${journal.title}/${journal.id}`}
            >
              <i className="far fa-edit" ></i>
            </a></MDBCardTitle>
            </div>
                <MDBCardTitle id={journal.id} className="journal-text-gradient">
                  <header>{journal.title}</header>
                </MDBCardTitle>
              </MDBCardOverlay>
                <MDBCardFooter className="text-light footer-bg-gradient"></MDBCardFooter>
            </MDBCard>
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
