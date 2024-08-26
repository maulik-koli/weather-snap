import React, { useContext } from 'react'

import ForcastData from "./ForcastData.jsx";
import FavLocation from './FavLocation.jsx';
import MapComponent from './MapComponent.jsx';
import LoadingBlock from './LoadingBlock.jsx';
import ErrorBlock from './ErrorBlock.jsx';
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx';

const SideComponents = ({ lable }) => {
    const { error, isFetching } = useContext(ErrorFetchingContext)

    let content = <LoadingBlock />
    if(lable === "Map"){
        content = <MapComponent />
    }
    else if(lable === "Fauvrite Locations"){
        content = <FavLocation />
    }
    else{
        content = <ForcastData />
    }

    console.log(error)

    return (
        <div className='side-right'>
            {isFetching ? <LoadingBlock /> 
                : error ? <ErrorBlock /> : content
            }
        </div>
    )
}

export default SideComponents;
