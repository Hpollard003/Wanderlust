import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PageEditor = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id, pageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/journals/${id}/pages/${pageId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, [id, pageId]);

  const editPageHandler = (page) => {
    fetch(`/journals/${id}/pages/${pageId}`, {
      method: "PATCH",
      body: JSON.stringify(page),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const editBtn = (e) => {
    e.preventDefault();
    editPageHandler({
      title,
      body,
    });
    navigate(-1);
  };

  return (
    <div className="card position-absolute top-50 start-50 translate-middle bg-transparent border-0">
      <button onClick={() => navigate(-1)} className="btn text-dark">
        Go Back
      </button>
      <h2 className="text-center text-gradient">Edit "{title}" Page</h2>
      <form onSubmit={editBtn} className="list-group list-group-flush">
        <input
          required
          type="text"
          className="form-control"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          maxLength="20"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
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
  );
};
export default PageEditor;
