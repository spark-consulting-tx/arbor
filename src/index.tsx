import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router basename="/">
      <App />
    </Router>,
    document.getElementById('root'));
