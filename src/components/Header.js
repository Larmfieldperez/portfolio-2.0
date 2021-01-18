import './Header.css'
import * as Scroll from 'react-scroll';

let scroller = Scroll.scroller

function Header() {
  return (
    <header className="App-header">
      <div>
        <span onClick={()=>{
          scroller.scrollTo('Projects', {
            duration: 1000,
            delay: 100,
            smooth: true,
          })
        }}> Projects</span>
      </div>

      <div>
        <span onClick={()=> {
          scroller.scrollTo('Contact', {
            duration: 1000,
            delay: 100,
            smooth: true,
          })
        }}>Contact</span>
      </div>

      <div>
        <span>Resume</span>
      </div>

    </header>
  )
}

export default Header;
