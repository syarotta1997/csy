import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Image} from 'react-bootstrap';


class Feature extends React.Component{

    render(){
        return (
            <div>

            <Carousel responsive>

                <Carousel.Item>
                    <Image width={'100%'} alt="900x500" src="https://78.media.tumblr.com/a0ea4775a372773f69980f6932013c1d/tumblr_p4lexvzmmH1txmggto1_1280.jpg" responsive />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image width={'100%'} alt="900x500" src="https://78.media.tumblr.com/a0ea4775a372773f69980f6932013c1d/tumblr_p4lexvzmmH1txmggto1_1280.jpg" responsive />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>  */}
                </Carousel.Item>
                <Carousel.Item>
                <Image width={'100%'} alt="900x500" src="https://78.media.tumblr.com/a0ea4775a372773f69980f6932013c1d/tumblr_p4lexvzmmH1txmggto1_1280.jpg" responsive />
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}


export default Feature;