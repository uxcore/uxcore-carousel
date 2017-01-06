/**
 * Carousel Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');

const Carousel = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Carousel arrows className="demo" autoplay pauseOnHover largeArrowsAndDots={false} fade>
          <div>
            <img
              src="http://www.wallcoo.com/human/City_Night_Scene_02/wallpapers/1680x1050/City_Night_Scene_photography_L10_30.jpg" style={{ width: '100%' }}
              role="presentation"
            />
          </div>
          <div>
            <img
              src="http://img5.imgtn.bdimg.com/it/u=3349768475,1559424970&fm=21&gp=0.jpg"
              style={{ width: '100%' }}
              role="presentation"
            />
          </div>
          <div>
            <img
              src="http://www.wallcoo.com/nature/beautiful_nature/wallpapers/1440x900/beautiful_nature_8433868.jpg"
              style={{ width: '100%' }}
              role="presentation"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

module.exports = Demo;
