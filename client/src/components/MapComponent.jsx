import React, { useContext, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { WeatherContext } from '../contexts/WeatherProvider';

const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const { weatherForcast } = useContext(WeatherContext)
    const { locationData } = weatherForcast
    const [lngLat, setLngLat] = useState({ lng: locationData.longitude, lat: locationData.latitude });

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

    return (
        <div className="map-wrapper">
        <div className="info-bar">
            <span>Longitude: {lngLat.lng}</span>
            <span>Latitude: {lngLat.lat}</span>
            <button className="map-button" onClick={() => alert('Button Clicked!')}>Click</button>
        </div>
        <div className="map-container" ref={mapContainer} />
        </div>
    );
};

export default MapComponent;
