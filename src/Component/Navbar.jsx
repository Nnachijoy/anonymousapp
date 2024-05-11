import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  './Navbar.css'

function NavSection() {
  return (
    <>
      <Navbar className="NavLogo">
        <Container>
          <Navbar.Brand href="/" className="NavLogo">Anonymous.</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavSection;