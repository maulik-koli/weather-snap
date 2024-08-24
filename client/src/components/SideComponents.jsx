import React from 'react'

import ForcastData from "./ForcastData.jsx";
import FavLocation from './FavLocation.jsx';

const SideComponents = ({ lable }) => {
    return (
        <>
            {lable === "Weather Info" && <ForcastData />}
            {lable === "Fauvrite Locations" && <FavLocation />}
        </>
    )
}

export default SideComponents;
