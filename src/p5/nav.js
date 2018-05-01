import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch.js'
import sketch1 from './sketch1.js'


class Nav extends Component {
  render(){
    return(
      <div>
      <P5Wrapper sketch={sketch} sketch1={sketch1} />
      </div>
    )
  }
}

export default Nav;
