import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';




class Navigation extends React.Component{

    render(){
        return (
                
            <Navbar id="navbar" inverse collapseOnSelect >
            <Navbar.Header style={{}}>
                <Navbar.Brand>
                    <a href="/"><h1><b>21 Grams.</b></h1></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                <Nav>
                    <NavItem className="button hvr-float" eventKey={1} href="/">
                        HOME
                    </NavItem>
                    <NavItem className="button hvr-float" eventKey={2} href="/about">
                        ABOUT
                    </NavItem>
                    <NavItem className="button hvr-float" eventKey={3} href="#">
                        WORKS 
                    </NavItem>
                    <NavItem className="button hvr-float" eventKey={4} href="/contact">
                        CONTACT
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}





export default Navigation;