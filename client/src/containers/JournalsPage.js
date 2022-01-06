import React from 'react'
import { Outlet } from 'react-router-dom'
import Journal from '../components/Journal/Journal'


export const Journals = () => {
    return(
        <div>
            <Outlet/>
            <Journal/>

        </div>
    )
}

export default Journals