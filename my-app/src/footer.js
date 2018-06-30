import React, {Component} from 'react';
import {Navbar,FormControl,FormGroup,Grid,Row,Button} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const divStyle = {
    // height:'200px',
    // backgroundColor:'#E0E0E0',
    position:'absolute',
    backgroundColor:'#2C2C2C',
    // position:'realtive',
    left:'0',
    right:'0',
    paddingTop:'30px',
    paddingBottom:'40px',
    align:'center'
  };

const buttonStyle = {
    margin:'10px',
    height:'40px',
    width:'40px',
    // backgroundColor:'white',
    // borderRadius:'60%'
    // transition: "all ease .5s",
}

class Footer extends React.Component{


    render(){
        return (
            <div className="footer" style={divStyle}>
                <Grid style={{width:'80%'}}>
                        <Row className="text-center"><h4 style={{color:'#ECEBEB'}}>Social Media</h4></Row>
                        <Row className="text-center">
                            <SocialIcon className="button hvr-float" url="http://twitter.com/csyday829" color='#ECEBEB' style={buttonStyle}/>
                            <SocialIcon className="button hvr-float" url="https://csyday.tumblr.com/" color='#ECEBEB' style={buttonStyle}/>
                            <SocialIcon className="button hvr-float" url="https://github.com/syarotta1997" color='#ECEBEB' style={buttonStyle}/>
                            <SocialIcon className="button hvr-float" url="mailto:csyday829@gmail.com" color='#ECEBEB' style={buttonStyle}/>
                        </Row>
                        <br/><br/>
                        <Row className="text-center" >
                            <h5 style={{color:'#ECEBEB'}}>© 2018 CSYDAY All Rights Reserved</h5>

                        </Row>
                </Grid>
            </div>
        )
    }
}


export default Footer;