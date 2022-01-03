import React from 'react'
import { useParams } from 'react-router-dom'

const PageCards = ({pages , setPages, removeItem}) => {
  const { id } = useParams

    return (
        <div>
        {pages.map((page, ind) => (
            <div key={ind} id={page.id}>
                <img src={page.image} alt={page.title} />
                <h1>{page.title}</h1>
                <h2>{page.body}</h2>
                <button
                  onClick={removeItem}
                  id={page.id}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
                <a href={`/journals/edit/${page.journal_id}/pages/${page.id}`}>Edit</a>
            </div>
        ))}
    </div>
    )
}

export default PageCards
