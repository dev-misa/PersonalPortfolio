import React from 'react'
import tempImage from '../assets/temp-image.jpg'
import awsImage from '../assets/icons8-aws.svg'
import cssImage from '../assets/icons8-css.svg'
import htmlImage from '../assets/icons8-html.svg'
import javaImage from '../assets/icons8-java.svg'
import javascriptImage from '../assets/icons8-javascript.svg'
import pythonImage from '../assets/icons8-python.svg'
import reactImage from '../assets/icons8-react-native.svg'
import tailwindImage from '../assets/icons8-tailwind-css.svg'
function Skills() {
  return (
    <div className="Skills-Section">
        <div className="SkillSVGIcons">
          <img src={javaImage}/>
          <img src={pythonImage}/>
          <img src={javascriptImage}/>
          <img src={htmlImage}/>
          <img src={cssImage}/>
          <img src={reactImage}/>
          <img src={tailwindImage}/>
          <img src={awsImage}/>
        </div>
    </div>
  )
}

export default Skills