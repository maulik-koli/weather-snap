import React, { useContext } from 'react'

import ForcastData from "./ForcastData.jsx";
import FavLocation from './FavLocation.jsx';
import MapComponent from './MapComponent.jsx';
import { WeatherContext } from '../contexts/WeatherProvider.jsx';
import LoadingBlock from './LoadingBlock.jsx';

const SideComponents = ({ lable }) => {
    const { location } = useContext(WeatherContext)

    return (
        <div className='side-right'>
            {/* <FavLocation /> */}
            {location ? lable === "Weather Info" && <ForcastData /> : null}
            {location ? lable === "Fauvrite Locations" && <FavLocation /> : null}
            {/* {location ? lable === "Map" && <MapComponent /> : <LoadingBlock />} */}
        </div>
    )
}

export default SideComponents;
