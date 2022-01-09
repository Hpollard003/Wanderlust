import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FRIEND_PAGES = () => {
  const [pages, setPages] = useState([]);
  const nav = useNavigate();
  const { journal_id , friend_id, id, username ,numOfFriends } = useParams();

  useEffect(() => {
    fetch(`/journals/${journal_id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPages(data.pages);
      });
  }, [journal_id, friend_id, id]);

  return (
    <div>
      <h1 className="text-center text-gradient">Pages </h1>
      <button onClick={() => nav(`/${username}/${id}/friends/${numOfFriends}/journals/${friend_id}`)} 
        className='btn btn-danger position-absolute end-0 mx-3'>Close Journal</button>
      <div className="page-list">
        {pages.map((page, ind) => (
          <article id={page.id} className="page" key={ind}>
            <h2 className="text-gradient">{page.title}</h2>
            <p className="page-header text-break text-gradient">{page.body}</p>
            <h4 className="text-light">{ind + 1}</h4>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FRIEND_PAGES;
