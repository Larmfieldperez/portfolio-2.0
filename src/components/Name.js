import {Component} from 'react';

export default class Name extends Component {
  componentDidMount() {
    const nameDiv = document.querySelector('.Name');
    // this.width = nameDiv.offsetWidth;
    // this.height = nameDiv.offsetHeight;
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.nameText = nameDiv.querySelector('.titleNameText');
    this.move = 15;
  }

  handleMouseMove(evt){
    const xMove = Math.round(
      (evt.screenX / this.width) * this.move - this.move / 2
    );

    const yMove = Math.round(
      (evt.screenY / this.height) * this.move - this.move / 2
    );

    this.nameText.style.textShadow = `
      ${xMove}px ${yMove}px 2px rgb(48, 48, 48, 0.7)
    `;

    // this.render();
  }

  render() {
    return(
      // <div onMouseMove={this.handleMouseMove.bind(this)}>
        <div className="Name" onMouseMove={this.handleMouseMove.bind(this)}>
            <h1 className="titleNameText">Laura <br></br> Armfield-Perez</h1>
        </div>
      // </div>
    )
  }
}
