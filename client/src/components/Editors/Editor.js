import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Editor = () => {
  const [journals, setJournals] = useState([]);
  const [title, setTitle] = useState('');
  const { id, titleText } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/journals")
      .then((resp) => resp.json())
      .then((data) => {
        setJournals(data);
        console.log(journals);
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
      title
    });
    navigate(-1)
  };

  return (
    <div>
      <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle bg-transparent">
        <form onSubmit={editBtn} className="list-group list-group-flush">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
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
