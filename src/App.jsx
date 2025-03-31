import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';

function App() {
  return (
  
      <div>
        <Banner />
        <div className="SectionTitle">
          <h1>About Me</h1>
        </div>
        <AboutMe />
      </div>
  );
}

export default App;