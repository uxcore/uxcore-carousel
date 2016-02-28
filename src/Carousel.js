/**
 * Carousel Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

if (typeof window !== 'undefined') {
    const matchMediaPolyfill = function matchMediaPolyfill() {
      return {
          matches: false,
          addListener: function () {
          },
          removeListener: function () {
          }
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

let Slick = require('react-slick');
let assign = require('object-assign');
let classnames = require('classnames');
let React = require('react'); 
let ReactDOM = require('react-dom');


class Carousel extends React.Component {

    constructor(props) {
        super(props);
    }

    processChildren() {
        let me = this;
        let length = React.Children.count(me.props.children);
        if (length > 0) {
            return React.Children.map(me.props.children, (child, index) => {
                return <div>{child}</div>
            });
        }
        else {
            return <div></div>
        }
    }

    render() {
        let me = this;
        let {children, className, ...props} = me.props;
        return (
            <div className={classnames({
                "kuma-carousel": true,
                [className]: !!className
            })}>
                <Slick {...props}>
                    {me.processChildren()}
                </Slick>
            </div>
        );
    }
}

Carousel.defaultProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}


// http://facebook.github.io/react/docs/reusable-components.html
Carousel.propTypes = {
}

Carousel.displayName = "Carousel";

module.exports = Carousel;
