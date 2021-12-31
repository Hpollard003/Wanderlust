import React from 'react'
import { NavLink } from 'react-router-dom'

export const UnAuthHome = () => {
    return(
            <div>
                <h1>Wanderlust</h1>
                <h3>Create Personal Travel Journals</h3>
                <NavLink className="shadow-lg btn btn-outline-dark mx-2" to='/login'>Login</NavLink>
                <NavLink className="shadow-lg btn btn-outline-dark mx-2" to='/signup'>Sign Up</NavLink>
            </div>
    )
}
export default UnAuthHome 