import React, { useState, useEffect } from "react";
import { JournalCard } from "./JournalCard";

export const Journal = () => {
  const [journals, setjournals] = useState([]);

  useEffect(() => {
    fetch("/journals")
      .then((resp) => resp.json())
      .then((data) => {
        setjournals(data);
        console.log(journals);
      });
  }, []);

  const addJournalHandler = (journal) => {
    fetch("/journals", {
      method: "POST",
      body: JSON.stringify(journal),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setjournals((prevjournals) => [
          ...prevjournals,
          { id: data.id, ...journal },
        ]);
        console.log(journal);
      });
  };

  const removeItem = (event) => {
    fetch(`/journals/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        filter(event.target.id);
      });
  };

  const filter = (id) => {
    const newchars = journals.filter((char) => char.id !== parseInt(id));
    setjournals(newchars);
  };

  return (
    <div>
      <h1>Journals</h1>
      <section className="container">
      <JournalCard journals={journals} setjournals={setjournals} removeItem={removeItem} />
      </section>
    </div>
  );
};

export default Journal;
