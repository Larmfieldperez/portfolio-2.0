import React from 'react';
import projects from './ProjectsList';
import SingleProject from './SingleProject';

import LazyLoad from 'react-lazyload';
import FadeIn from 'react-fade-in';

function AllProjects() {
  return (
    <div className='AllProjects'>
      {projects.map(project => {
        return (
            <div>
              <LazyLoad throttle={200} delay={150}>
              <FadeIn delay={600} transitionDuration={600}>
              <SingleProject project={project} key={project.name} />
              </FadeIn>
              </LazyLoad>
            </div>

        )
      })}
    </div>
  )
}

export default AllProjects;
