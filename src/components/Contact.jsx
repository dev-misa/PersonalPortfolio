import React from 'react'
import tempImage from '../assets/temp-image.jpg'
import githubImage from '../assets/icons8-github.svg'
import linkedinImage from '../assets/icons8-linkedin.svg'
import tiktokImage from '../assets/icons8-tiktok.svg'
import youtubeImage from '../assets/icons8-youtube.svg'
function Contact() {
  return (
    <div className="Contact-Container">
        <div className="Contact-Section">
                <img src={tiktokImage} alt="" />
                <img src={linkedinImage} alt="" />
                <img src={githubImage} alt="" />
                <img src={youtubeImage} alt="" />   
        </div>
    </div>
  )
}

export default Contact