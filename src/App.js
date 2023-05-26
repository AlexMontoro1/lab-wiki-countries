import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import NavbarComponent from './components/NavbarComponent';
//import allCountries from './countries.json';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './pages/CountryDetails';



function App() {
  //const [ countries, setCountries ] = useState(allCountries)
  const [countries, setCountries] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      //console.log(response.data)
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (countries === null) {
    return (
      <div>
        <h3>... loading</h3>
      </div>
    );
  }
  return (
    <div className="App">
      <NavbarComponent />
      <div className="container">
        <div className="row">
        <div className="col-5">
          <CountriesList countries={countries} />
          </div>
          <div className="col-7">
          <Routes>
            <Route
              path="/countries/:countryCode"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
