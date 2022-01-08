import React, { useState } from "react";

const NewJournalForm = ({addJournalHandler , toggler}) => {
  const [title, setTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    addJournalHandler({
      title
    });
    toggler()
    setTitle('')
  };


  return (
      <div>
    <form onSubmit={handleSubmit} className="list-group list-group-flush w-25 "> 
 
        <input
          type="text"
          className="list-group-item"
          name="title"
          id="title"
          placeholder="title"
          value={title}
          maxLength="30"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn btn-green" type="submit">
          Submit
        </button>
    </form>
    </div>
  );
};

export default NewJournalForm;
