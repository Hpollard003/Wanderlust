import React from "react";

export const JournalCard = (props) => {


  const renderjournalList = () => {
    return (
      <div className="row">
        {props.journals.map((journal, ind) => (
          <div className="col" key={`${journal.id}`}>
            <div className="">
              <img
                src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fclassic-story-book-cover-vector-id178658028%3Fk%3D6%26m%3D178658028%26s%3D612x612%26w%3D0%26h%3DBNP6fJL_ZVt9rSgcSSQ7Ysc1-XPTDfYC0mjDoIcOWAA%3D&f=1&nofb=1"
                }
                className=""
                style={{ width: 190, height: "250px" }}
                alt={`${journal.name} img`}
              />
              <div className="row">
                <h5 className="">
                  {journal.name}
                </h5>
              </div>
              <ul className="">
                  <label className="">
                    Title
                  </label>{" "}
                  <br></br> {journal.title}
              </ul>
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