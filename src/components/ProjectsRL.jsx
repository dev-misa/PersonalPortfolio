import React from 'react';

export default function Project({ description, image }) {
  return (
    <div className="Projects-Section">
      <div className="Projects-img">
        <img src={image} alt="Project" />
      </div>
      <div className="Projects-desc">
        <p>{description}</p>
      </div>
    </div>
  );
}
