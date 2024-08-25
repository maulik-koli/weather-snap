import React from 'react'

import ForcastData from "./ForcastData.jsx";
import FavLocation from './FavLocation.jsx';

const SideComponents = ({ lable }) => {
    return (
        <div className='side-right'>
            {lable === "Weather Info" && <ForcastData />}
            {lable === "Fauvrite Locations" && <FavLocation />}
        </div>
    )
}

export default SideComponents;
