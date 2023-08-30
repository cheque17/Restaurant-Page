import './style.css';
import './page-init-display';
import './menu'
import Icon from './bkg-img.jpg';
import FaceIcon from './facebook.png'
import { displayMenu, testFunks } from './menu';


console.log('Today is: ' + new Date());


const option1 = document.querySelector('.option-1');
option1.addEventListener('click', ()=> {
  displayMenu();
})

const option2 = document.querySelector('.option-2');
option2.addEventListener('click', ()=>{
  testFunks('#content', '#footer');
})


/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/