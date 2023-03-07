// const NavigationBar = () => {
// 	return (
// 		<h1> Working?? </h1>
// 	);
// };
// export default NavigationBar;

// import Autocomplete from '@mui/material/Autocomplete';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Destinations from '../explore/destinations/destinationsList';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import logo from '../../logo.gif';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
import './navbar.module.css'

function NavigationBar() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        </head>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">
          {/* <img src={logo} 
              width="30"
              height="30"
              className="d-inline-block align-top" />{' '} */}
            Travel Wizard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/travelMode">Travel Mode</Nav.Link>
                  <Nav.Link href="/itineraries">Your Itineraries</Nav.Link>
                  <Nav.Link href="/flights">Flights</Nav.Link>
                  <Nav.Link href="/hotels">Hotels</Nav.Link>
                  <NavDropdown
                    title="Account"
                    id={`offcanvasNavbarDropdown-expand-${'lg'}`}
                  >
                    {/* when already signed in these should say "Your Info" "Sign out" and "Settings" */}
                    <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                      Sign In
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/settings">
                      Settings
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  {/* <Stack spacing={2} sx={{ width: 300 }}> */}
                    {/* <Autocomplete
                      id="search"
                      className='search'
                      freeSolo
                    //   options={Destinations.map((option) => option.str)}
                      renderInput={(params) => <TextField {...params} label="Find your next destination!" />}
                    /> */}
                    {/* TODO: info about saving search here: https://refine.dev/blog/material-ui-autocomplete-component/#what-is-material-ui */}

                  {/* </Stack> */}
                  <Button variant="outline-info" href="/hotelcards">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavigationBar;