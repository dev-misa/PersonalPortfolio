import React from 'react'
import avatarDefault from '../assets/avatar-default.png';
function AboutMe() {
  return (
    
        <div className="AboutMe-Container">
            <div className="DefaultIcon">
                <img src={avatarDefault} alt="image" />
            </div>
            <div className="AbtMe">
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit.
                 Libero rutrum maximus fringilla accumsan aenean metus.
                 Natoque cras lectus enim duis cubilia orci fringilla sollicitudin.
                </p>
            </div>
        </div>
    
  )
}

export default AboutMe