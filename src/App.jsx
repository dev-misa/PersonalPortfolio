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
import DLButton from './components/DLButton';
import Footer from './components/Footer';
import awsImage from './assets/icons8-aws.svg'
import cssImage from './assets/icons8-css.svg'
import githubImage from './assets/icons8-github.svg'
import htmlImage from './assets/icons8-html.svg'
import javaImage from './assets/icons8-java.svg'
import javascriptImage from './assets/icons8-javascript.svg'
import linkedinImage from './assets/icons8-linkedin.svg'
import pythonImage from './assets/icons8-python.svg'
import reactImage from './assets/icons8-react-native.svg'
import tailwindImage from './assets/icons8-tailwind-css.svg'
import tiktokImage from './assets/icons8-tiktok.svg'
import youtubeImage from './assets/icons8-youtube.svg'
import mangImage from './assets/mangform.png'
import pokeImage from './assets/pokeweather.png'

function App() {
  return (
  
      <div>
        <Banner />
        <div className="SectionTitle">
          <h1>About Me</h1>
        </div>
        <AboutMe />
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Projects</h1>
        </div>
        <ProjectsLR
        image={pokeImage}
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        />
        
        <ProjectsRL
        image={mangImage}
        description="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero rutrum maximus
            fringilla accumsan aenean metus. Natoque cras lectus enim duis cubilia orci
            fringilla sollicitudin."
        />
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Skills & Tools</h1>
        </div>
        <Skills/>
        <HorizontalRule/>
        <div className="SectionTitle">
          <h1>Contact Me</h1>
        </div>
        <Contact />
        <DLButton/>
        <Footer/>
      </div>
  );
}

export default App;