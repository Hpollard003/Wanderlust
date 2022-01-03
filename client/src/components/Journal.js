import React, { useState, useEffect } from "react";
import { JournalCard } from "./JournalCard";

export const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [id , setId] = useState(null)

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
      method: "DELETE"
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

  return (
    <div>
      <h1>Journals</h1>
      <section className="container">
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
