import React from 'react'
import { Outlet } from 'react-router-dom'
import Journal from '../components/Journal'


export const Journals = () => {
    return(
        <div>
            <Journal/>
            <Outlet/>

        </div>
    )
}

export default Journals