import React, { useState, useEffect } from "react";
import { JournalCard } from "./JournalCard";
import NewJournalForm from "./NewJournalForm";

export const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [toggled, setToggled] = useState(false);

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

  const toggleBtn = (e) => {
    setToggled(true);
  };

  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <div>
      <h1>Journals</h1>
      <section className="container">
        <button onClick={toggler}>New Journal</button>
        <div hidden={!toggled}>
          <NewJournalForm addJournalHandler={addJournalHandler} />
        </div>
        <JournalCard
          journals={journals}
          setJournals={setJournals}
          removeItem={removeItem}
        />
      </section>
    </div>
  );
};

export default Journal;
