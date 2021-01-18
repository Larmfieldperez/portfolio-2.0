import React from 'react';
import FeatImage1 from '../images/ShelterInPets1.png'
import './FeaturedProject.css'

function FeaturedProject() {
  return (
    <div className='featProjPage'>

      <center>
        <h1> ☻ Featured ☻ </h1>
      {/* </center> */}

      <div className="featuredImages">
        <img src={FeatImage1} alt='shelter in pets 1' className={`featImage leftFeatImage`}/>
        <img src={FeatImage1} alt='shelter in pets 1' className={`featImage rightFeatImage`}/>
      </div>

      {/* <center> */}
      <div className="featProjInfo">
        {/* <center> */}
          <h2>Shelter In Pets</h2>
        {/* </center> */}

        <p> hello here we have a short description of the featured project just a coupla lines nothing crazy a few sentences two maybe three give or take one or two if you want to depends on the project i guess</p>
      </div>

      <div className="featuredLinks">

        <a href="https://github.com/sense-5/shelter-in-pets" target="_blank" rel="noreferrer">
          <p>github</p>
        </a>

        <a href="https://expo.io/@shelterinpets/projects/ShelterInPets?release-channel=prod" target="_blank" rel="noreferrer">
          <p>website link</p>
        </a>

      </div>
      </center>


    </div>
  )
}

export default FeaturedProject;
