import React, { useState } from "react";

const NewJournalForm = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addJournalHandler({
      title,
      image,
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
  );
};

export default NewJournalForm;
