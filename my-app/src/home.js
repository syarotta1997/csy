import React, {Component} from 'react';
import './home.css'
import Header from './header';
import Footer from './footer';
import Feature from './feature';
import Main from './main';
import Contact from './contact';
import Sticky from 'react-sticky-el';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { navHeight: 50 };
    }

    adjustmargin(height){
        this.setState({ navHeight: height });
    }
    render(){
        return(
            <Router>
                <div className="sticky_container" style={{overflow:'auto',flow:'auto'}}>
                    <Header/>
                    <Sticky>
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
                    </Sticky>

                    <div className='content'>
                        <Main/>
                        <Feature />
                        <Contact/>
                        

                    
                    </div>
                    <Footer/>
                    
                </div>
            </Router>

        )
    }
}

export default Home;