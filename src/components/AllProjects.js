import React from 'react';
import projects from './ProjectsList';

function AllProjects() {
  return (
    <div className='AllProjects'>
      {projects.map(project => {
        return (
          <div>
            <h1>{project.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default AllProjects;
