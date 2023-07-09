
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 import { Header } from '../components/header';
 export const Root=()=>{

    return(
        
       <> 
        <Navbar expand="sm" className="bg-body-tertiary" >
             <Container>
                <Navbar.Brand href="./" >Site Nav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./" >Home</Nav.Link>
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
        <Header/>
<div id="outlet">
        <Outlet/>
      </div>
     
       
</>
    )
}
