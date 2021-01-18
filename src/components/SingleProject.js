import React from 'react';
import './Projects.css';
import tempLaptop from '../images/LuxDucks.png';
import tempIphone from '../images/ShelterInPets1.png'

import LazyLoad from 'react-lazyload'

function SingleProject(props) {
  const project = props.project;

  const name = project.name;
  const desc = project.desc;
  const tech = project.technologies;
  const github = project.github;
  const site = project.site;
  const type = project.imageType;
  const imagePath = project.imagePath

  // const photo = require(`../images/${project.imagePath}.png`);


  return (
    <div className="SingleProject">

      <div className="info-box">
        <h2 className="projectName">{name}</h2>

        <hr className="TitleDivider"/>

        <p>{desc}</p>
        <p>Technologies:</p>
        <ul>
          {tech.map(tech => {
            return(
            <li key={tech}>{tech}</li>
            )
          })}
        </ul>

        <a href={github} target="_blank" rel="noreferrer">github</a>

        {site ? <a href={site} target="_blank" rel="noreferrer">site</a> : <div></div>}
      </div>

      <div className="ProjectImage">
        {console.log('image path is, ', imagePath)}
        {/* <img src={require(`../images/${imagePath}.png`)} alt="pls fill this in later" className="Image"/> */}
        {/* <img src={photo} alt="screenshot of app" className="Image"/> */}

        {type === 'laptop'
          ? <img src={tempLaptop} alt="temp laptop pic" className="Laptop" />
          : <img src={tempIphone} alt="temp iphone pic" className="Iphone" />
        }

      </div>

    </div>
  )
}

export default SingleProject;
