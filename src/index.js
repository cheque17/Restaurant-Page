import './style.css';
import './page-init-display'
import Icon from './bkg-img.jpg';
import FaceIcon from './facebook.png'


console.log('Today is: ' + new Date());

const option1 = document.querySelector('.option-1');

option1.addEventListener('click', ()=> {
  console.log('Hello')
})


/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/