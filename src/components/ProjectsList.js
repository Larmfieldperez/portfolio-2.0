//CHANGE PIMAGE PATH TO BE ../IMAGES/FILE NAME
//ONCE IVE ADDED COMPONENTS FOLDER

const projects = [
  {
    name: 'Lux Dux',
    desc: 'An e-commerce website selling luxury rubber ducks for your bathtime and debugging needs.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redux', 'React'],
    github: 'https://github.com/GreatGatsby-js/grace-shopper',
    site: 'https://grace-shopper-great-gatsby.herokuapp.com/',
    imageType: 'laptop',
    // imagePath: '../images/LuxDucks.png'
    imagePath: 'LuxDucks'
  },
  {
    name: 'Fin Lit',
    desc: 'A one-stop web app showing top financial new in real time. Built in 6 hours for a hackathon.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Google News API'],
    github: 'https://github.com/HackItGH20/fin-literacy',
    site: 'https://fin-literacy.herokuapp.com/',
    imageType: 'laptop',
    // imagePath: '../images/FinLit.png'
    imagePath: 'FinLit'
  },
  {
    name: 'Perfect it',
    desc: 'A mobile app built to assit in preparation for speeches and presentations by allowing users to record their speech and track their usage of specified words. Built in 2 days for a hackathon.',
    technologies: ['React-Native', 'Redux'],
    github: 'https://github.com/Larmfieldperez/Perfect-it',
    site: null,
    imageType: 'iphone',
    // imagePath: '../images/PerfectIt.png'
    imagePath: 'PerfectIt'
  }
]

export default projects;
