import logo from './logo.svg';
import './App.css';
import AboutPopUp from './AboutPopUp';
import React, {useState} from 'react';

function App() {
  const [aboutState, toggleAboutState] = useState(false)

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

        <div className="Name">
          <h1>Laura <br></br> Armfield-Perez</h1>
        </div>

        <div className="About-Button">
          <h2>About ME</h2>
        </div>

        <div className='aboutPopUpContainer'><AboutPopUp/></div>

      </div>

    </div>
  );
}

export default App;
