import React, { useState, useEffect } from "react";
import  JournalCard  from "./JournalCard";
import NewJournalForm from "./NewJournalForm";

export const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [toggled, setToggled] = useState(false);
  const [toggleOpt, setToggleOpt] = useState(false);

  useEffect(() => {
    fetch("/journals")
      .then((resp) => resp.json())
      .then((data) => {
        setJournals(data);
        console.log(journals);
      });
  }, []);

  const removeItem = (event) => {
    fetch(`/journals/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        filter(event.target.id);
      });
  };

  const addJournalHandler = (journal) => {
    fetch("/journals", {
      method: "POST",
      body: JSON.stringify(journal),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setJournals((prevjournals) => [
          ...prevjournals,
          { id: data.id, ...journal },
        ]);
        console.log(journal);
      });
  };

  const filter = (id) => {
    const newbooks = journals.filter((book) => book.id !== parseInt(id));
    setJournals(newbooks);
  };

  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="text-light">
      <h1 className="text-center text-gradient">Journals </h1>
      <section className="container px-5">
        <button
          onClick={toggler}
          className={`btn ${!toggled ? "btn-info" : "btn-danger"} position-absolute start-0`}
        >
          {!toggled ? "New Journal" : "Close"}
        </button>
        <div hidden={!toggled}>
          <NewJournalForm addJournalHandler={addJournalHandler} toggler={toggler}/>
        </div>
        <button onClick={optionsToggler} className={`btn ${!toggleOpt ? "btn-info" : "btn-danger"} btn-sm position-absolute my-5 end-0`}>{!toggleOpt ? <i className="fas fa-cogs"></i> : <i className="far fa-times-circle"></i>}</button>
        <JournalCard
          journals={journals}
          removeItem={removeItem}
          toggleOpt={toggleOpt}
        />
      </section>
    </div>
  );
};

export default Journal;
