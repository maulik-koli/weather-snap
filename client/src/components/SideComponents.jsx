import React from 'react'

import ForcastData from "./ForcastData.jsx";

const SideComponents = ({ lable }) => {
    return (
        <>
            {lable === "Weather Info" && <ForcastData />}
        </>
    )
}

export default SideComponents;
