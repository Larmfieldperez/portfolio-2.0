// import logo from './logo.svg';
// import pow from './images/pow.png'
import React, {useState} from 'react';
import './App.css';
import AboutPopUp from './AboutPopUp';
import FeaturedProject from './FeaturedProject';
import AllProjects from './AllProjects';
import Contact from './Contact';
import Header from './Header'
import {Element} from 'react-scroll'

// import LazyLoad from 'react-lazyload';

function App() {
  const [showAbout, setIsShown] = useState(false);

  //SHOULD I HAVE CLICK HANDLER FOR MOBILE USERS?????? TBD
  // const handleAbout = () => {
  //   // console.log('curr about state is ', showAbout)
  //   // console.log('ABOUT WAS CLICKED HEHEH')
  //   setIsShown(showAbout => !showAbout)
  //   // console.log('after click, about state is ', showAbout)
  // }

  return (
    <div className="App">

      <Header />

      <div className="main">

        <div className='section'>

          <div className="EngineerWords">
            <h2>Software Enginner</h2>
          </div>

          {/* <img src={pow} alt="pow bubble" className='pow'/> */}
        </div>

        {/* NAME AREA/ABOUT INFO */}
        {/* {showAbout ? <div className='aboutPopUpContainer'><AboutPopUp/></div> :  <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div>} */}
        {showAbout ? <div className='aboutPopUpContainer'><AboutPopUp/></div> :  <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div>}

        <div className='section'>
          {/*
          <div className="About-Button" onClick={() => handleAbout()}>
            {/* should this be a hover thing IDK
            <h2>About ME</h2>
          </div>
          */}

          <div className="About-Button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {/* should this be a hover thing IDK */}
            <h2>About ME</h2>
          </div>
        </div>


        {/* <div className='aboutPopUpContainer'><AboutPopUp/></div> */}

      </div>
      {/* end main page */}
      <Element name="Projects">
        <FeaturedProject />
      </Element>

      {/* <LazyLoad offset={200}> */}
      <AllProjects />
      {/* </LazyLoad> */}

      <Element name="Contact">
        <center>
          <Contact />
        </center>
      </Element>

    </div>
  );
}

export default App;
