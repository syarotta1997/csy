import React, { Component } from "react";
import {Jumbotron,Button} from 'react-bootstrap';
import Background from './components/img/bgimg2.jpg';
import {Grid,Row} from "react-bootstrap";
 
class Main extends Component {
  render() {
    return (
      <div style={divStyle}>
          
            <div style={innerDiv}>
              <Row className="text-center">
                <h1 style={{color:'white'}}>Hello, world!</h1>
                <p style={{color:'white'}}>
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
                </p>
              </Row>
            </div>
          
      </div>
    );
  }
}
const divStyle = {
  height:'100vh',
  backgroundImage: `url(${Background})`,
  backgroundPosition:'center center',
  overflow:'hidden',
  left:'0',
  right:'0',
  paddingTop:'30px',
  align:'center'
};

const innerDiv = {
  backgroundColor:'rgba(0, 0, 0, 0.5)',
  marginTop:'50vh',
  // bottom:0,
  justifyContent:'center',
  padding:'30px',
  verticalAlign: 'middle',
  borderRadius:'10px'
}
export default Main;