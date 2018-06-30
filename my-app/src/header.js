import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Grid,Row,Image} from "react-bootstrap";
import Icon from './components/img/header_icon.jpg';


class Header extends React.Component{
    render(){
        return(
            <div className="header-containter">
                {/* <Image src={Icon} responsive/>
                <Grid style={{width:'80%'}}>
                        <Row className="text-center">
                            
                        </Row>
                </Grid> */}

                
            </div>
        )
    }

}


export default Header;