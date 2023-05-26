import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function CountryDetails({ countries }) {
  // const params = useParams();
  // //console.log(params);

  // const [details, setDetails] = useState(null);
  // //console.log(details);
  // useEffect(() => {
  //   const country = countries.find(
  //     (country) => country.alpha3Code === params.countryCode
  //   );
  //   setDetails(country);
  // }, [countries, params.countryCode]);
  // if (details === null) {
  //   return (
  //     <div>
  //       <h3>... loading</h3>
  //     </div>
  //   );
  // }

  //!BONUS
  const params = useParams();

  const [details, setDetails] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryCode}`
      );
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [params.countryCode]);

  if (details === null) {
    return (
      <div>
        <h3>... loading</h3>
      </div>
    );
  }

  return (
    <Container className='container'>
    <div className="row">
    <div className="col-7">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`} alt="{details.name.official}" /> 
      <h1>{details.name.official}</h1>
      <Table>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{details.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {details.borders.map((eachBorder) => {
                  const borderedCountry = countries.find(
                    (country) => country.alpha3Code === eachBorder
                  );
                  const borderedCountryName = borderedCountry
                    ? borderedCountry.name.official
                    : '';
                  return (
                    <li key={eachBorder}>
                      <Link to={`/countries/${eachBorder}`}>
                        {borderedCountryName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
      </div>
    </Container>
  );
}

export default CountryDetails;
