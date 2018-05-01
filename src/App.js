import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import Places from './places'
import './bg.css'

class App extends Component {
  render() {
    return (
      <div className="bg">
        <Places />
      </div>
    );
  }
}

export default App;
