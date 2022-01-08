import React from "react";


const PageCards = ({ pages, toggleOpt, removeItem }) => {
  return (
    <div className="page-list" >
      {pages.map((page, ind) => (     
      
          <article id={page.id} className="page" key={ind}>
            <h2 className="text-gradient">{page.title}</h2>
            <p className="page-header text-break text-gradient">{page.body}</p>
            <div hidden={!toggleOpt} className="positition-relative">
              <button
                className="btn btn-sm btn-outline-danger rounded-circle"
                onClick={removeItem}
                id={page.id}
              >
                <i className="fas fa-trash" id={page.id}></i>
              </button>
              <a
                href={`/journals/edit/${page.journal_id}/pages/${page.id}`}
                className="btn btn-sm btn-outline-primary mx-2 rounded-circle"
              >
                <i className="far fa-edit"></i>
              </a>
            </div>
              <h4 className="text-light">{ind + 1}</h4>
          </article>
     
      ))}
    </div>
  );
};

export default PageCards;
