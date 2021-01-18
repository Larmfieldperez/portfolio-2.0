import React from 'react';
import FeatImage1 from '../images/ShelterInPets1.png'
import './FeaturedProject.css'

function FeaturedProject() {
  return (
    <div className='featProjPage'>

      <div className="featuredContent">

        <h1> ☻ Featured ☻ </h1>

      <div className="featuredImages">
        <img src={FeatImage1} alt='shelter in pets 1' className={`featImage leftFeatImage`}/>
        <img src={FeatImage1} alt='shelter in pets 1' className={`featImage rightFeatImage`}/>
      </div>

      <div className="featProjInfo">
          <h2>Shelter In Pets</h2>

        <p> hello here we have a short description of the featured project just a coupla lines nothing crazy a few sentences two maybe three give or take one or two if you want to depends on the project i guess</p>
      </div>

      <div className="featuredLinks">

        <a href="https://github.com/sense-5/shelter-in-pets" target="_blank" rel="noreferrer">
          github
        </a>

        <a href="https://expo.io/@shelterinpets/projects/ShelterInPets?release-channel=prod" target="_blank" rel="noreferrer">
          website link
        </a>

      </div>
      {/* </center> */}
      </div>


    </div>
  )
}

export default FeaturedProject;
