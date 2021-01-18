import React from 'react';
import projects from './ProjectsList';
import SingleProject from './SingleProject';

import LazyLoad from 'react-lazyload';

function AllProjects() {
  return (
    <div className='AllProjects'>
      {projects.map(project => {
        return (
            <div>
              <LazyLoad offset={-150} throttle={100} >
              <SingleProject project={project} key={project.name} />
              </LazyLoad>
            </div>

        )
      })}
    </div>
  )
}

export default AllProjects;
