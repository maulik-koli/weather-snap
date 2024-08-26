import React, { useContext, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const { setError, setIsFetching } = useContext(ErrorFetchingContext)
    const { weatherForcast, setWeatherForcast } = useContext(WeatherContext)
    const { locationData } = weatherForcast

    const handleSetLngLat = () => {
        let cords = {}
        if(
            (!locationData.longitude || !locationData.latitude) ||
            ((locationData.longitude === 0.0) || (locationData.latitude === 0.0))
        ){
            setError({
                error: "Something went wrong, please try again latter."
            })
            cords = { lng: 0.0, lat: 0.0 }
        }
        else{
            cords = {lng : locationData.longitude, lat : locationData.latitude}
        }
        return cords
    }
    const [lngLat, setLngLat] = useState(handleSetLngLat)


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWF1bGlrLWtvbGkiLCJhIjoiY20wNzFyOTd1MHF4NzJyczl3OWFtMWgwZCJ9.Cw3-kVqw-d0LqP_0JETRIw'

        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lngLat.lng, lngLat.lat],
            zoom: 8,
            attributionControl: false,
        });

        map.current.on('move', () => {
            const center = map.current.getCenter();
            setLngLat({ lng: center.lng.toFixed(4), lat: center.lat.toFixed(4) });
        });

    }, [lngLat]);

    const sendLngLat = async () => {
        setIsFetching(true)
        try{
            // http://localhost:3000/cords?lat=${lngLat.lat}&lng=${lngLat.lng}

            const response = await fetch(`http://localhost:3000/cords?lat=${lngLat.lat}&lng=${lngLat.lng}`)
            const data = await response.json()
            console.log(data)
            if(!response.ok){
                throw new Error(data.error)
            }

            setWeatherForcast(data)
            setError(null)
        }
        catch(error){
            setError({
                error: error.message || "Something went wrong, please try again latter."
            })
        }
        finally{
            setIsFetching(false)
        }
    }

    return (
        <div className="map-wrapper">
            <h1>Map</h1>
            <div className="info-bar">
                <span>Longitude: {lngLat.lng}</span>
                <span>Latitude: {lngLat.lat}</span>
                <button className="map-button" onClick={sendLngLat}>Click</button>
            </div>
            <div className="map-container" ref={mapContainer} />
        </div>
    );
};

export default MapComponent;
