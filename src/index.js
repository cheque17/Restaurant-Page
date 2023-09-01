import './style.css';
import './page-init-display';
import { displayMenu, testFunks } from './menu';
import { displayContact } from './contact';


console.log('Today is: ' + new Date());

let menuDisplayed = 0;

const option1 = document.querySelector('.option-1');
option1.addEventListener('click', ()=> {
  if (menuDisplayed) {
    return
  }
  displayMenu();
  menuDisplayed = menuDisplayed === 0 ? 1 : 0;
})

const option2 = document.querySelector('.option-2');
option2.addEventListener('click', ()=>{
  testFunks('#body', '#place-info');
})


let contactDisplayed = 0;
const option3 = document.querySelector('.option-3');
option3.addEventListener('click', ()=>{
  if (contactDisplayed) {
    return
  }
  displayContact();
  contactDisplayed = contactDisplayed === 0 ? 1 : 0;
})


/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/