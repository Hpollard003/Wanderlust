import React from 'react'
import oops from "../assets/404.gif"

const Error404 = () => {
    return (
        <div className="errorBody">
            <h1 className="text-center">404</h1>
            <img className="errorBody" width="0" src={oops} height="1500" alt="Be happy this didnt load."/>
        </div>        
    )
}

export default Error404 