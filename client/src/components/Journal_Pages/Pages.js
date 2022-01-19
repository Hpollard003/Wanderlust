import React, { useState, useEffect } from "react";
import PageCards from "./PageCards";
import { useNavigate, useParams } from "react-router-dom";
import NewPage from "./NewPage";

const Pages = () => {
  const [pages, setPages] = useState([]);
  const [toggled, setToggled] = useState(false);
  const [toggleOpt, setToggleOpt] = useState(false);
  const nav = useNavigate();

  const { id, username } = useParams();

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
      body: JSON.stringify(page),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setPages((prevjournals) => [...prevjournals, { id: data.id, ...page }]);
      });
  };

  const removeItem = (e) => {
    fetch(`/journals/${id}/pages/${e.target.id}`, {
      method: "DELETE",
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
  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };
  const optionsToggler = () => {
    toggleOpt ? setToggleOpt(false) : setToggleOpt(true);
  };

  return (
    <div className="px-5">
      <h1 className="text-center text-gradient">Pages </h1>
      <button
        onClick={toggler}
        className={`btn ${
          !toggled ? "btn-info" : "btn-danger"
        } position-relative start-0`}
      >
        {!toggled ? "New Page" : "Close"}
      </button>
      <button
        onClick={() => nav(`/journals/${username}`)}
        className="btn btn-danger position-absolute end-0"
      >
        Close Journal
      </button>
      <button
        onClick={optionsToggler}
        className={`btn ${
          !toggleOpt ? "btn-info" : "btn-danger"
        } btn-sm position-absolute my-5 mx-3 end-0`}
        title="Options"
      >
        {!toggleOpt ? (
          <i className="fas fa-cogs" title="Options"></i>
        ) : (
          <i className="far fa-times-circle" title="Close"></i>
        )}
      </button>
      <div hidden={!toggled}>
        <NewPage addPageHandler={addPageHandler} toggler={toggler} />
      </div>

      <PageCards
        pages={pages}
        setPages={setPages}
        removeItem={removeItem}
        toggleOpt={toggleOpt}
      />
    </div>
  );
};

export default Pages;
