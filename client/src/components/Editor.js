import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Editor = () => {
  const [journals, setJournals] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState("");
  const { id } = useParams();
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
        const index = copy.findIndex((book) => book.id == id);
        copy[index] = data;
        setJournals(copy);
      });
  };

  const editBtn = (e) => {
    e.preventDefault();
    editJournalHandler({
      title,
      image,
    });
    navigate('/journals')
  };

  return (
    <div>
      <div className="">
        <form onSubmit={editBtn} className="list-group list-group-flush">
          <div className="mb-3 list-group-item bg-transparent">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 list-group-item bg-transparent">
            <input
              type="text"
              className="form-control"
              name="img_url"
              id="img_url"
              placeholder="Enter Image Url"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Editor;
