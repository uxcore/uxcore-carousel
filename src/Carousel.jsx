/**
 * Carousel Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82

import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

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

class Carousel extends React.Component {
  static displayName = 'Carousel';
  static propTypes = {
    centerDots: PropTypes.bool,
    children: PropTypes.node,
  };
  static defaultProps = {
    prefixCls: 'kuma-carousel',
    largeArrowsAndDots: false,
    dots: true,
    cssEase: 'ease-out',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerDots: true,
    slidesToScroll: 1,
    arrows: 'hover',
  };

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

    props.arrows = !!props.arrows;

    return (
      <div
        className={classnames({
          [`${prefixCls}`]: true,
          [`${prefixCls}-dots-centered`]: !!centerDots,
          [`${prefixCls}-large-mode`]: !!largeArrowsAndDots,
          [`${prefixCls}-always-show-arrows`]: (me.props.arrows === 'always'),
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

export default Carousel;

