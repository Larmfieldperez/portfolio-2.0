import logo from './logo.svg';
import './App.css';
import AboutPopUp from './AboutPopUp';
import React, {useState} from 'react';

function App() {
  const [showAbout, toggleAbout] = useState(true)

  const handleAbout = () => {
    // console.log('curr about state is ', showAbout)
    // console.log('ABOUT WAS CLICKED HEHEH')
    toggleAbout(showAbout => !showAbout)
    // console.log('after click, about state is ', showAbout)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>P r o j e c t s</h2>
        <h2>C o n t a c t</h2>
        <h2>R e s u m e</h2>
      </header>

      <div className="main">
        <div className="Engineer-Bubble">
          <h2>Software Enginner</h2>
        </div>


        {/* {showAbout ? <div className='aboutPopUpContainer'><AboutPopUp/></div> : <div/>} */}
        {showAbout ? <div className='aboutPopUpContainer'><AboutPopUp/></div> :  <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div>}

        {/* <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div> */}

        <div className="About-Button" onClick={() => handleAbout()}>
          {/* should this be a hover thing IDK */}
          <h2>About ME</h2>
        </div>


        {/* <div className='aboutPopUpContainer'><AboutPopUp/></div> */}

      </div>

    </div>
  );
}

export default App;
