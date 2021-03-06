import React, { useState } from "react";
import { useParams } from "react-router-dom";

const NewPage = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPageHandler({
      title,
      body,

      journal_id: id,
    });
    props.toggler();
    setTitle("");
    setBody("");
  };
  return (
    <>
      <h1 className="p-5 text-gradient">New Page</h1>
      <div className="card w-50 start-0 bg-transparent">
        <form onSubmit={handleSubmit} className="list-group list-group-flush">
          <input
            required
            type="text"
            className="list-group-item w-50"
            name="title"
            id="title"
            placeholder="title"
            value={title}
            maxLength="20"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            required
            className="form-control"
            style={{ height: "100px" }}
            name="body"
            id="body"
            placeholder="Text"
            value={body}
            maxLength="200"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button className="btn btn-green" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPage;
