import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import ProjectsLR from './components/ProjectsLR';
import ProjectsRL from './components/ProjectsRL'
import tempImage from './assets/temp-image.jpg';
import Skills from './components/Skills';
import HorizontalRule from './components/HorizontalRule';
import Contact from './components/Contact';
function App() {
  return (
  
      <div>
        <Banner />
        <div className="SectionTitle">
          <h1>Section Title 1</h1>
        </div>
        <AboutMe />
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Section Title 2</h1>
        </div>
        <ProjectsLR
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        />
        <ProjectsRL
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        />
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Section Title 3</h1>
        </div>
        <Skills/>
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Section Title 4</h1>
        </div>
        <Contact />
      </div>
  );
}

export default App;