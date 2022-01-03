import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PageEditor = () => {
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState("");
  const { id } = useParams();
  const { pageId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/journals/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPages(data.pages);
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
        const index = copy.findIndex((book) => book.id == id);
        copy[index] = data;
        setPages(copy);
      });
  };

  const editBtn = (e) => {
    e.preventDefault();
    editPageHandler({
      title,
      body,
      image,
    });
    navigate(`/journals/${id}`)
  };

  return (
    <div>
      <div className="">
        <form onSubmit={editBtn} className="list-group list-group-flush">
          <div className="mb-3 list-group-item bg-transparent">
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
          </div>
          <div className="mb-3 list-group-item bg-transparent">
            <input
              type="text"
              className="form-control"
              name="text"
              id="body"
              placeholder="Text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
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
export default PageEditor;
