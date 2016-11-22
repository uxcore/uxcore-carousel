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
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const Slick = require('react-slick');
const classnames = require('classnames');
const React = require('react');


class Carousel extends React.Component {

  processChildren() {
    const me = this;
    const length = React.Children.count(me.props.children);
    if (length > 0) {
      return React.Children.map(me.props.children, child => <div>{child}</div>);
    }
    return <div />;
  }

  render() {
    const me = this;
    const { className, prefixCls, centerDots, largeArrowsAndDots, ...props } = me.props;
    return (
      <div
        className={classnames({
          [`${prefixCls}`]: true,
          [`${prefixCls}-dots-centered`]: !!centerDots,
          [`${prefixCls}-large-mode`]: !!largeArrowsAndDots,
          [className]: !!className,
        })}
      >
        <Slick {...props}>
          {me.processChildren()}
        </Slick>
      </div>
    );
  }
}

Carousel.defaultProps = {
  prefixCls: 'kuma-carousel',
  largeArrowsAndDots: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerDots: true,
  slidesToScroll: 1,
};


// http://facebook.github.io/react/docs/reusable-components.html
Carousel.propTypes = {
  centerDots: React.PropTypes.bool,
};

Carousel.displayName = 'Carousel';

module.exports = Carousel;
