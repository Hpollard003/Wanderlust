import React from "react";
import { useNavigate } from "react-router-dom";


export const JournalCard = (props) => {
  const nav = useNavigate()

  const renderjournalList = () => {
    return (
      <div className="row" >
        {props.journals.map((journal, ind) => (
          <div className="col-3" key={`${journal.id}`} id={`${journal.id}`} onClick={(e) => {
            nav(`/journals/${e.target.id}`)
          }}>
            <div className="card h-100 w-50" id={`${journal.id}`}>
              <ul className="mt-5">
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