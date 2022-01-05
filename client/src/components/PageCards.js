import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PageCards = ({ pages, toggleOpt, removeItem }) => {
  return (
    <div className="page-list">
      {pages.map((page, ind) => (
        <>
          <article key={ind} id={page.id} className="page ">
            <header className="page-header text-gradient">{page.title}</header>
            <p className="text-break text-gradient">{page.body}</p>
            <img
              height="auto"
              width="100px"
              className="p-3"
              src={page.image}
              alt={page.title}
            />
            <div hidden={!toggleOpt}>
              <button
                className="btn btn-sm btn-outline-danger "
                onClick={removeItem}
                id={page.id}
              >
                <i class="fas fa-trash" id={page.id}></i>
              </button>
              <a
                href={`/journals/edit/${page.journal_id}/pages/${page.id}`}
                className="btn btn-sm btn-outline-primary mx-2"
              >
                <i class="far fa-edit"></i>
              </a>
            </div>
          </article>
        </>
      ))}
    </div>
  );
};

export default PageCards;
