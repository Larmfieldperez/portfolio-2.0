import React from 'react';
import projects from './ProjectsList';
import SingleProject from './SingleProject';

function AllProjects() {
  return (
    <div className='AllProjects'>
      {projects.map(project => {
        return (
          <SingleProject project={project} />
        )
      })}
    </div>
  )
}

export default AllProjects;
