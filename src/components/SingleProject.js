import React from 'react';
import './Projects.css';

function SingleProject(props) {
  const project = props.project;
  const name = project.name;
  const desc = project.desc;
  const tech = project.technologies;
  const github = project.github;
  const site = project.site;


  return (
    <div className="SingleProject">

      <div className="info-box">
        <h3>{name}</h3>

        <hr className="TitleDivider"/>

        <p>{desc}</p>
        <p>Technologies:</p>
        <ul>
          {tech.map(tech => {
            return(
            <li>{tech}</li>
            )
          })}
        </ul>

        <a href={github} target="_blank" rel="noreferrer">github</a>

        {site ? <a href={site} target="_blank" rel="noreferrer">site</a> : <div></div>}
      </div>

      <div className="ProjectImage">
        <p>placeholder</p>
      </div>

    </div>
  )
}

export default SingleProject;
