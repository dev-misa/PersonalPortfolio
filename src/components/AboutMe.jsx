import React from 'react'
import gengar from '../assets/gengar-pfp.jpg';
function AboutMe() {
  return (
    
        <div className="AboutMe-Container">
            <div className="DefaultIcon">
                <img src={gengar} alt="pfp" />
            </div>
            <div className="AbtMe">
                <p>
                    Ciao tutti, mi chiamo Misael. 
                </p>
            </div>
        </div>
    
  )
}

export default AboutMe