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
    const [lngLat, setLngLat] = useState({ lng: locationData.longitude ? locationData.longitude : 139.6929116, lat: locationData.latitude ? locationData.latitude : 35.6889853 });

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
        const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay))

        await wait(2000)
        try{
            // http://localhost:3000/cords?lat=${lngLat.lat}&lng=${lngLat.lng}

            const response = await fetch(`http://localhost:3000/cords?lat=${lngLat.lat}&lng=${lngLat.lng}`)
            const data = await response.json()
            
            if(!response.ok){
                throw new Error("Failed to fetch data.")
            }

            setWeatherForcast(data)
        }
        catch(error){
            setError({
                message: error.message || "Could not fetch places, pleace try again latter."
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
