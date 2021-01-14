// import logo from './logo.svg';
// import pow from './images/pow.png'
import React, {useState} from 'react';
import './App.css';
import AboutPopUp from './AboutPopUp';
import FeaturedProject from './FeaturedProject';
import AllProjects from './AllProjects';
import Contact from './Contact';


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
      <header className="App-header">
        <h2>P r o j e c t s</h2>
        <h2>C o n t a c t</h2>
        <h2>R e s u m e</h2>
      </header>

      <div className="main">

        {/* <div className='section'> */}

          <div className="EngineerWords">
            <h2>Software Enginner</h2>
          </div>

        {/* </div> */}


        {window.innerWidth > 900 && showAbout ? <div className='aboutPopUpContainer'><AboutPopUp/></div> :  <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div>}

        <div className='aboutSection'>
          <div className="About-Button"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <h2>About ME</h2>
          </div>
        </div>

      </div>
      {/* end main page */}

      <FeaturedProject />

      <AllProjects />

      <center>
        <Contact />
      </center>

    </div>
  );
}

export default App;
