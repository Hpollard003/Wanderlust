import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Editor = () => {
  const [journals, setJournals] = useState([]);
  const [title, setTitle] = useState("");
  const { id, titleText } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/journals")
      .then((resp) => resp.json())
      .then((data) => {
        setJournals(data);
      });
  }, []);

  const editJournalHandler = (journal) => {
    fetch(`/journals/${id}`, {
      method: "PATCH",
      body: JSON.stringify(journal),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const copy = [...journals];
        const index = copy.findIndex((book) => book.id === id);
        copy[index] = data;
        setJournals(copy);
      });
  };

  const editBtn = (e) => {
    e.preventDefault();
    editJournalHandler({
      title,
    });
    navigate(-1);
  };

  return (
    <div>
      <div className="card position-absolute top-50 start-50 translate-middle bg-transparent border-0">
        <button onClick={() => navigate(-1)} className="btn text-dark">
          Go Back
        </button>
        <h2 className="text-gradient text-center">Edit {titleText}</h2>
        <form onSubmit={editBtn} className="list-group list-group-flush">
          <input
            required
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Name"
            maxLength="30"
            defaultValue={titleText}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Editor;
