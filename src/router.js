import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const BasicRoute = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/works" element={<Works />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </Router>
);

export default BasicRoute;
