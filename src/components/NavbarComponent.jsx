import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
