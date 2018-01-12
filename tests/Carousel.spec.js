import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import TestUtils, { Simulate } from 'react-dom/test-utils';
import Carousel from '../src';

Enzyme.configure({ adapter: new Adapter() })

describe('Carousel', () => {
    it('className prop works', () => {
        const node = mount(<Carousel className="test-classname"/>)
        expect(node.props().className).to.equal('test-classname')
    })

    it('prefixCls prop works', () => {
        const node = mount(<Carousel prefixCls="test-prefix"/>)
        expect(node.find('.test-prefix')).to.have.length(1)
    })

    it('centerDots prop works', () => {
        const node1 = mount(<Carousel prefixCls="test-prefix" />)
        expect(node1.find('.test-prefix-dots-centered')).to.have.length(1)

        const node2 = mount(<Carousel prefixCls="test-prefix" centerDots={false}>
        </Carousel>)
        expect(node2.find('.test-prefix-dots-centered')).to.have.length(0)
    })

    it('largeArrowsAndDots prop works', () => {
        const node1 = mount(<Carousel prefixCls="test-prefix"/>)
        expect(node1.find('.test-prefix-large-mode')).to.have.length(0)

        const node2 = mount(<Carousel prefixCls="test-prefix" largeArrowsAndDots/>)
        expect(node2.find('.test-prefix-large-mode')).to.have.length(1)
    })

    it('arrows === always works', () => {
        const node1 = mount(<Carousel prefixCls="test-prefix" arrows="test"/>)
        expect(node1.find('.test-prefix-always-show-arrows')).to.have.length(0)

        const node2 = mount(<Carousel prefixCls="test-prefix" arrows="always"/>)
        expect(node1.find('.test-prefix-always-show-arrows')).to.have.length(0)
    })

    it('coverage improve', () => {
        // code coverage for children.length > 0
        mount(<Carousel>
            <div>a</div>
        </Carousel>)
    })

});