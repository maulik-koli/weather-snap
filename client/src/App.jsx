

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <SearchComponent />
        <div className='weather-con'>
          <Weather />
          <SideComponents />
        </div>
      </main>
    </>
  )
}

export default App;
