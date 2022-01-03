import React from 'react'

const PageCards = ({pages , setPages, removeItem}) => {
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
            </div>
        ))}
    </div>
    )
}

export default PageCards
