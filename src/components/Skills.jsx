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
          <div className="Ani-Java"><img src={javaImage}/></div>
          <div className="Ani-PY"><img src={pythonImage}/></div>
          <div className="Ani-JS"><img src={javascriptImage}/></div>
          <div className="Ani-HTML"><img src={htmlImage}/></div>
          <div className="Ani-CSS"><img src={cssImage}/></div>
          <div className="Ani-React"><img src={reactImage}/></div>
          <div className="Ani-TWCSS"><img src={tailwindImage}/></div>
          <div className="Ani-AWS"><img src={awsImage}/></div>
        </div>
    </div>
  )
}

export default Skills