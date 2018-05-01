import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'


class Places extends Component{
  // componentDidMount () {
  //   const faux = this.props.connectFauxDOM('div', 'circle')
  //   d3.select(faux)
  //     .append('div')
  //     .html('Hello World!')
  //   this.props.animateFauxDOM(800)
  // }

shapes = () => {

let y =100
const faux = this.props.connectFauxDOM('div', 'rect')
  d3.select(faux).
  data(data).
  enter().
  append("svg:rect").
  attr("height", function(datum) { return y(datum.books); }).
  attr("width", 10).
  attr("fill", "#2d578b");
}



  render(){
    // let circle1 = d3.select("circle:nth-child(1n)")
    // circle1.style("fill", "royalblue")
    // circle1.attr("r", 125)
    return(
      <div>
      <svg width="1100" height="575">
      {this.shapes()}

      </svg>
      </div>
    )
  }
}

var data = [{year: 2006, books: 54},
            {year: 2007, books: 43},
            {year: 2008, books: 41},
            {year: 2009, books: 44},
            {year: 2010, books: 35}];

// <line value="red" x="550" y="250" x1="10" y1="20"></line>
// <rect value="yellow" x="950" y="250" width="10" height="10"></rect>
      // <circle name="blue" cx="150" cy="250" r="10"></circle>
export default withFauxDOM(Places);
