import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const JournalCard = (props) => {
  const nav = useNavigate()

  const renderjournalList = () => {
    return (
      <div className="row" >
        {props.journals.map((journal, ind) => (
          <div className="col-3" key={ind} id={journal.id} onClick={(e) => {
            nav(`/journals/${e.target.id}`)
          }}>
            <div className="card h-100 w-50" id={journal.id}>
              <ul className="mt-5" id={journal.id} >
                {journal.title}
              </ul>
              </div>
              <div className="">
                <button
                  onClick={props.removeItem}
                  id={journal.id}
                  className=""
                >
                  Remove
                </button>
                <a href={`/journals/edit/${journal.id}`}>Edit</a>
              </div>
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