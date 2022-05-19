import React from 'react';

import { Footer, Blog, Tournament, Features, Madfam, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Madfam />
    <Features />
    <Tournament />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
