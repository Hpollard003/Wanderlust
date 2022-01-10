import React, { useState } from 'react'
import oops from "../assets/404.gif"

const Error404 = () => {
    const [toggled, setToggled] = useState(false);

    const toggler = () => {
        toggled ? setToggled(false) : setToggled(true);
      };

    return (
        <div className="errorBody text-center">
            <h1 className="text-center text-danger fw-bold p-5 "> Use Navbar to Get Back </h1>
            <button className="btn glitch" onClick={toggler}>Secret Button</button>
            <img className="errorBody" width={`${!toggled ? "0" : "1500"}`} src={oops} height="1500" alt="Be happy this didnt load."/>
        </div>        
    )
}

export default Error404 