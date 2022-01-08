import React, { useState } from 'react'

const Search = () => {
    const [searchValue, setSearchValue] = useState("")


    return (
        <form className="d-flex position-absolute start-50 translate-middle">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-green" type="submit"><i className="fas fa-search"></i></button>
      </form>
    )
}

export default Search
