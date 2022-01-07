import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Uploader from "./FilePond";

const NewPage = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [image, setImage] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPageHandler({
      title,
      body,
      // image,
      journal_id: id,
    });
    setTitle("");
    setBody("");
    // setImage('')
  };
  return (
    <>
      <h1 className="p-5 text-gradient">New Page</h1>
      <div className="card w-50 start-0 bg-transparent">
        <form onSubmit={handleSubmit} className="list-group list-group-flush">
          <input
            type="text"
            className="list-group-item w-50"
            name="title"
            id="title"
            placeholder="title"
            value={title}
            maxLength="50"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            class="form-control"
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
              className="list-group-item"
              name="img_url"
              id="name"
              placeholder="Image Url"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            /> */}
          {/* <Uploader/> */}
          <button className="btn btn-green" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPage;
