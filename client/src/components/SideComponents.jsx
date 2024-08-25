import React from 'react'

import ForcastData from "./ForcastData.jsx";
import FavLocation from './FavLocation.jsx';
import MapComponent from './MapComponent.jsx';

const SideComponents = ({ lable }) => {
    return (
        <div className='side-right'>
            <FavLocation />
            {/* {lable === "Weather Info" && <ForcastData />}
            {lable === "Fauvrite Locations" && <FavLocation />}
            {lable === "Map" && <MapComponent />} */}
        </div>
    )
}

export default SideComponents;
