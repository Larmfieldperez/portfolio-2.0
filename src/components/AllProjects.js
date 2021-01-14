import React from 'react';
import projects from './ProjectsList';
import SingleProject from './SingleProject';
import './Projects.css';

function AllProjects() {
  return (
    <div className='AllProjects'>
      {projects.map(project => {
        return (
          <SingleProject project={project} key={project.name}/>
        )
      })}
    </div>
  )
}

export default AllProjects;
