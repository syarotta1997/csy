import React from 'react'
import ReactDOM from 'react-dom'
import Parallax from 'react-springy-parallax'
import Sticky from 'react-sticky-el';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
import Navigation from './navigation';
import Background from './components/img/bg.png';
import {Image} from 'react-bootstrap';
import Icon from './components/img/header_icon.png';
import './index.css';
import Footer from './footer';
class App extends React.Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding:'20px'
        }
        return (
            <div>
              
            <Parallax ref="parallax" pages={3}>

                {/* <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

                <Parallax.Layer
                    offset={0} speed={0} factor={4}
                    style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover',backgroundPosition:'center center' }}
                />
                {/* Home page */}
                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}>
                    <div>
                      <Image className="button hvr-float" src={Icon} width={500} href="/" responsive/>
                    </div>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    Another page ...
                </Parallax.Layer>

                <Parallax.Layer
                    offset={2.41}
                    speed={0.5}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    <Footer/>
                </Parallax.Layer>

            </Parallax>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))