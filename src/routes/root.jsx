
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
 export const Root=()=>{
    const [key, setKey] = useState('root');
    return(
        
        <div id="header">

        <Navbar expand="lg" className="bg-body-tertiary">
             <Container>
                <Navbar.Brand href="./">Chris Wilson, rebooted...</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="./aboutUs">About us</Nav.Link>
                         <Nav.Link href="./lockdown">Lockdown</Nav.Link>
                         <NavDropdown title="Weather" id="basic-nav-dropdown">
                            <NavDropdown.Item href="./currentWeather">Current</NavDropdown.Item>
                            <NavDropdown.Item href="./forecast">7 Day forecast</NavDropdown.Item>
                         </NavDropdown>
                      </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>  
        <div id="chris">
            <br/><br/>
            <h3>Site under construction <br/>Live development please excuse the layout while I work on the functionality
            </h3>
            <br/>
            <h2>Example webpage</h2>
            <h2> written by</h2>
             <h2>Chris Wilson</h2>  
             <h2>using React js </h2>
             <h2>Google Firebase</h2>
             <h3>project built with vite</h3>
       <h6>weather api  open-meteo.com</h6>
       </div>
       
       <div className="sides" id="email">
    <p>email: cw.plastering.services@gmail.com</p>
    chris@cmwilson.co.uk

   </div>
      
        
<div id="outlet">
        <Outlet/>
      </div>
     
       </div>

    )
}
