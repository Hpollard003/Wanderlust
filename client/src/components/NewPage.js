import React, { useState } from "react";
import { useParams } from "react-router-dom";

const NewPage = (props) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const { id } = useParams()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.addPageHandler({
        title,
        body,
        image,
        journal_id: id,
      });
    };
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
          <div className="">
          <input
            type="text"
            className="form-control"
            name="body"
            id="body"
            placeholder="Text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <div className="">
            <input
              type="text"
              className="form-control"
              name="Image"
              id="name"
              placeholder="Image Url"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <button className="" type="submit">
            Submit
          </button>
      </form>
      </div>
    )}

export default NewPage
