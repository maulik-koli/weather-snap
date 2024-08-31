# Weather Snap

## Description

Weather Snap is a web application that provides real-time weather details including temperature, wind speed, pressure, UV index, and more based on user-inputted locations. Users can save their favorite locations for quick access, view maps of their locations, and find weather information by hovering over the map.

## Features

- Real-time weather and forecast information
- Interactive map of locations
- Weather details on map hover
- Save favorite locations for quick access

## Technology

- ReactJS
- Node.js
- Express.js
- HTML, CSS, JavaScript

## Dependencies

- **mapbox-gl**: ^3.6.0
- **react**: ^18.3.1
- **cors**: ^2.8.5
- **express**: ^4.19.2
- **request**: ^2.88.2

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weather-snap
   ```

2. **Install dependencies:**
   
   For the client:
   ```bash
   cd client
   npm install
   ```

   For the server:
   ```bash
   cd server
   npm install
   ```
   
3. **Start the server:**
   ```bash
   cd server
   npm run start
   ```

4. **Start the client:**
    ```bash
    cd client
    npm run start
    ```

5. **Open your browser and navigate to:**
   ```bach
   http://localhost:5173/
   ```

## Project Structure
```
weather-snap/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── header-logo
│   │   ├── components/
│   │   │   ├── Clock.jsx
│   │   │   ├── ErrorBlock.jsx
│   │   │   ├── FavLocation.jsx
│   │   │   ├── ForecastData.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LoadingBlock.jsx
│   │   │   ├── MapComponent.jsx
│   │   │   ├── SearchComponent.jsx
│   │   │   └── SideComponent.jsx
│   │   │   └── Weather.jsx
│   │   ├── contexts/
│   │   │   ├── ErrorAndFetching.jsx
│   │   │   └── WeatherProvider.jsx
│   │   ├── app.css
│   │   ├── app.jsx
│   │   ├── index.css
│   │   └── main.js
│   ├── node_modules/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── node_modules/
│   ├── utils/
│   │   ├── geocode.js
│   │   └── weathercode.js
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── .gitignore
└── .gitignore
```

- **client/**: Contains the frontend application.
  - **public/**: Public assets.
  - **src/**: Source code for the React app.
    - **assets/**: Static assets like images.
    - **components/**: React components.
    - **contexts/**: Context providers for global state management.
    - **app.css**: Main stylesheet.
    - **app.jsx**: Main React component.
    - **index.css**: Global styles.
    - **main.js**: Entry point for React application.
  - **node_modules/**: Node.js modules for the client.
  - **.gitignore**: Git ignore file for client.
  - **eslint.config.js**: ESLint configuration file.
  - **index.html**: Main HTML file.
  - **package-lock.json**: Lock file for client dependencies.
  - **package.json**: Client-side dependencies and scripts.
  - **vite.config.js**: Vite configuration for client.

- **server/**: Contains the backend application.
  - **node_modules/**: Node.js modules for the server.
  - **utils/**: Utility functions for geocoding and weather data.
  - **app.js**: Main server application file.
  - **package-lock.json**: Lock file for server dependencies.
  - **package.json**: Server-side dependencies and scripts.
  - **.gitignore**: Git ignore file for server.

## Working

1. **User Input**: The user inputs a location on the frontend.
2. **Fetch Coordinates**: The frontend sends a request to the `/weather` route on the backend, which fetches coordinates using the Mapbox API.
3. **Get Weather Data**: The backend uses these coordinates to request weather data from the Weatherstack API.
4. **Display Map**: Mapbox provides a map view based on the coordinates.
5. **Hover for Weather**: Users can hover over the map to see weather details of nearby locations.
6. **Save Favorites**: Users can save favorite locations to local storage for quick access.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request with a description of your changes.

## Acknowledgements

- [Weatherstack](https://weatherstack.com/): Provides weather data.
- [Mapbox](https://www.mapbox.com/): Provides map data and functionality.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/): Build tool that provides a faster and leaner development experience.
- [Express.js](https://expressjs.com/): Fast, minimalist web framework for Node.js.
- [Node.js](https://nodejs.org/): JavaScript runtime built on Chrome's V8 engine.

---
