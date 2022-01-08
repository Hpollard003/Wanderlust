import React from 'react'

const Search = () => {
    return (
        <form class="d-flex position-absolute start-50 translate-middle">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-green" type="submit"><i class="fas fa-search"></i></button>
      </form>
    )
}

export default Search
