import React, { useState, useEffect } from "react";
import { JournelCard } from "./JournelCard";

export const Journel = () => {
  const [journels, setjournels] = useState([]);

  useEffect(() => {
    fetch("/journels")
      .then((resp) => resp.json())
      .then((data) => {
        setjournels(data);
        console.log(journels);
      });
  }, []);

  const addJournelHandler = (journel) => {
    fetch("/journels", {
      method: "POST",
      body: JSON.stringify(journel),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setjournels((prevjournels) => [
          ...prevjournels,
          { id: data.id, ...journel },
        ]);
        console.log(journel);
      });
  };

  const removeItem = (event) => {
    fetch(`http://localhost:3000/journels/${event.target.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        filter(event.target.id);
      });
  };

  const filter = (id) => {
    const newchars = journels.filter((char) => char.id !== parseInt(id));
    setjournels(newchars);
  };

  return (
    <div>
      <h1>Journels</h1>
      <section className="container">
      <JournelCard journels={journels} setjournels={setjournels} removeItem={removeItem} />
      </section>
    </div>
  );
};

export default Journel;
