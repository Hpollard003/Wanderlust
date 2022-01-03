import React from 'react'

const PageCards = ({pages , setPages}) => {
    return (
        <div>
        {pages.map((page) => (
            <div key={page.id}>
                <img src={page.image} alt={page.title} />
                <h1>{page.title}</h1>
                <h2>{page.body}</h2>
            </div>
        ))}
    </div>
    )
}

export default PageCards
