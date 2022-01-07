import React, { useState, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PageEditor = () => {
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [image, setImage] = useState("");
  const { id, pageId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`/journals/${id}/pages/${pageId}`)
    .then((resp) => resp.json())
    .then((data) => {
      setPages(data);
      setTitle(data.title);
      setBody(data.body);
      console.log(pages);
    });
  }, []);
  
  const editPageHandler = (page) => {
    fetch(`/journals/${id}/pages/${pageId}`, {
      method: "PATCH",
      body: JSON.stringify(page),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const copy = [...pages];
        const index = copy.findIndex((book) => book.id === id);
        copy[index] = data;
        setPages(copy);
      });
  };

  const editBtn = (e) => {
    e.preventDefault();
    editPageHandler({
      title,
      body,
      // image,
    });
    navigate(-1);
  };

  return (
    <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle bg-transparent">
      <form onSubmit={editBtn} className="list-group list-group-flush">
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
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

        {/* <input
              type="text"
              className="form-control"
              name="img_url"
              id="img_url"
              placeholder="Enter Image Url"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            /> */}
        <button className="btn btn-green" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default PageEditor;
