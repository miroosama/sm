import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
