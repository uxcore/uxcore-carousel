---

## uxcore-carousel [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-carousel.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-carousel) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-carousel.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-carousel#info=devDependencies) 

## TL;DR

uxcore-carousel ui component for react, custom from react-slick

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-carousel
$ cd uxcore-carousel
$ npm install
$ gulp server
```
## Example
```js
var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    );
  }
});
```

|    Property    | Type |          Description          | Working |
| -------------  | ---- |          -----------          | ------- |
| className      | String |Additional class name for the inner slider div | Yes |
| adaptiveHeight | bool | Adjust the slide's height automatically | Yes |
| arrows         | bool | Should we show Left and right nav arrows | Yes |
| nextArrow      | React Component | Use this component for the next arrow button | Yes |
| prevArrow      | React Component | Use this component for the prev arrow button | Yes |
| autoplay       | bool | Should the scroller auto scroll? | Yes |
| pauseOnHover   | bool | Should pause autoplay when an item is hoverd | No |
| autoplaySpeed  |  int | delay between each auto scoll. in ms | Yes |
| centerMode     | bool | Should we centre to a single item? | Yes |
| centerPadding  | | | |
| cssEase        | | | |
| dots           | bool | Should we show the dots at the bottom of the gallery | Yes |
| dotsClass      | string | Class applied to the dots if they are enabled | Yes |
| draggable      | bool | Is the gallery scrollable via dragging on desktop? | Yes |
| easing         | string | | |
| fade           | bool | Slides use fade for transition  | Yes |
| focusOnSelect  | bool | | |
| infinite       | bool | should the gallery wrap around it's contents | Yes |
| initialSlide   | int | which item should be the first to be displayed | Yes |
| lazyLoad       | bool | Loads images or renders components on demands | Yes |
| responsive     | array | Array of objects in the form of `{ breakpoint: int, settings: { ... } }` The breakpoint _int_ is the `maxWidth` so the settings will be applied when resolution is below this value. Breakpoints in the array should be ordered from smalles to greatest. Use 'unslick' in place of the settings object to disable rendering the carousel at that breakpoint. Example: `[ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: 'unslick' } ]`| Yes |
| rtl            | bool | Reverses the slide order | Yes |
| slide         | string |||
| slidesToShow | int | Number of slides to be visible at a time | Yes |
| slidesToScroll | int | Number of slides to scroll for each navigation item
| speed | int |||
| swipe | bool |||
| swipeToSlide | bool |||
| touchMove | bool |||
| touchThreshold | int |||
| variableWidth | bool |||
| useCSS | bool | Enable/Disable CSS Transitions | Yes |
| vertical | bool |||
| afterChange | function | callback function called after the current index changes | Yes |
| beforeChange | function | callback function called before the current index changes | Yes |
| slickGoTo | int | go to the specified slide number

## Custom next/prev arrows

To customize the next/prev arrow elements, simply create new React components and set them
as the values of nextArrow and prevArrow.

````
class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}

````

Important: be sure that you pass your component's props to your clickable element
like the example above. If you don't, your custom component won't trigger the click handler.

You can also set onClick={this.props.onClick} if you only want to set the click handler.


## Usage


## API

## Props

配置项与 [react-slick](https://www.npmjs.com/package/react-slick) 相同

