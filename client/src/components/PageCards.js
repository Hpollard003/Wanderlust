import React from "react";
import { useParams } from "react-router-dom";

const PageCards = ({ pages, setPages, removeItem }) => {
  const { id } = useParams;

  return (
    <div className="page-list">
      {pages.map((page, ind) => (
          <article key={ind} id={page.id} className="page">
            <img src={page.image} alt={page.title} />
            <header className="page-header">{page.title}</header>
            <p className="text-break">{page.body}</p>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={removeItem}
              id={page.id}
            >
              Delete
            </button>
            <a href={`/journals/edit/${page.journal_id}/pages/${page.id}`}>
              Edit
            </a>
          </article>
      ))}
    </div>
  );
};

export default PageCards;
