import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import ProjectsLR from './components/ProjectsLR';
import ProjectsRL from './components/ProjectsRL'
import tempImage from './assets/temp-image.jpg';

function App() {
  return (
  
      <div>
        <Banner />
        <div className="SectionTitle">
          <h1>Section Title</h1>
        </div>
        <AboutMe />
        <div className="SectionTitle">
          <h1>Section Title</h1>
        </div>
        <ProjectsLR
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        /><br/>
        <ProjectsRL
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        /><br/>
        <ProjectsLR
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        /><br/>
        <ProjectsRL
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        image={tempImage}
        />
      </div>
  );
}

export default App;