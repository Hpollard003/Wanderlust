import React, { useState, useEffect } from "react";
import PageCards from "./PageCards";
import { useParams } from "react-router-dom";
import NewPage from "./NewPage";

const Pages = () => {
  const [pages, setPages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/journals/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPages(data.pages);
      });
  }, [id]);

  const addPageHandler = (page) => {
    fetch(`/journals/${id}/pages`, {
      method: "POST",
      body: JSON.stringify(
        page,
      ),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPages((prevjournals) => [
          ...prevjournals,
          { id: data.id, ...page },
        ]);
        console.log(page);
      });
  };

  const removeItem = (e) => {
    fetch(`/journals/${id}/pages/${e.target.id}`, {
      method: "DELETE"
    })
      .then((resp) => resp.json())
      .then(() => {
        filter(e.target.id);
      });
  };
  const filter = (id) => {
    const newbooks = pages.filter((book) => book.id !== parseInt(id));
    setPages(newbooks);
  };

  return (
    <div>
      <a href="/journals">X</a>
      <NewPage addPageHandler={addPageHandler} />
      <PageCards pages={pages} setPages={setPages} removeItem={removeItem} />
    </div>
  );
};

export default Pages;
