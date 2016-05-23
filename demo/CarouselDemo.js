/**
 * Carousel Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Carousel = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Carousel className="demo" autoplay={true} pauseOnHover={true} rtl={true}>
                    <h3>1</h3>
                    <h3>2</h3>
                    <h3>3</h3>
                </Carousel>
            </div>
        );
    }
};

module.exports = Demo;
