import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Jgif from "../../assets/journal.gif";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardFooter,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export const JournalCard = ({ journals, toggleOpt, removeItem }) => {
  const nav = useNavigate();
  const { username } = useParams();

  const renderjournalList = () => {
    return (
      <div className="row">
        {journals.length === 0 ? (
          <>
            <h3 className="text-light border border-5 rounded-pill bg-green px-3 py-2 text-center"
            style={{ width: "50rem" , marginLeft: "auto", marginRight: "auto"}}>
              Click New Journal To Get Started
            </h3>
          </>
        ) : null}
        {journals.map((journal, ind) => (
          <div className="col-4 p-3" key={ind} id={journal.id}>
            <MDBCard
              background=""
              className="text-light bg-transparent"
              id={journal.id}
              onClick={(e) => {
                nav(`/journals/${username}/${e.target.id}`);
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
                      className="btn btn-outline-danger rounded-circle mx-1"
                      title="Delete Journal"
                    >
                      <i
                        id={journal.id}
                        className="fas fa-trash"
                        title="Delete Journal"
                      ></i>
                    </button>
                    <a
                      className="btn btn-outline-primary rounded-circle"
                      href={`/journals/edit/${journal.title}/${journal.id}`}
                      title="Edit Journal"
                    >
                      <i className="far fa-edit" title="Edit Journal"></i>
                    </a>
                  </MDBCardTitle>
                </div>
                <MDBCardTitle id={journal.id} className="journal-text-gradient">
                  <header id={journal.id} className="fs-2">
                    {journal.title}
                  </header>
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
