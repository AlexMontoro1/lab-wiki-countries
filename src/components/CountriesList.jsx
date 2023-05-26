import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList({ countries }) {
  return (
    <Container className='container'>
      <div className="row">
        <div
          className="col-10"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((eachCountry) => {
             const lowCode = eachCountry.alpha2Code.toLowerCase()
            return (
              <div key={eachCountry.alpha3Code} className="listGroup">
                <ListGroup as="div" className="mb-3">
                  <Link
                    className="list-group-item list-group-item-action"
                    to={`/countries/${eachCountry.alpha3Code}`}
                  >
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${lowCode}.png`} alt={eachCountry.name.official} className="mr-3" width="50px"/>
                    <br />
                    {eachCountry.name.official}
                  </Link>
                </ListGroup>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default CountriesList;
