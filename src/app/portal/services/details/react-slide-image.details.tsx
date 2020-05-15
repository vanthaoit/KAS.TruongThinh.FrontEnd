import * as React from 'react';
import  { Component } from 'react';
import * as ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component<any, any> {
    render() {
        return (
            <>
        
                <div className="det">
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>

            </>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));