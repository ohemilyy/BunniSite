import React from 'react';
import ReactDOM from 'react-dom';
import './jsx/css/Root.css';
import "./lib/Bootstrapper.css"; // Bootstrapper for Tailwind
import Core from './jsx/Core';
import Nav from "./jsx/componentry/Nav.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Core />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);