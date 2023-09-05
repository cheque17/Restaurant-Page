import './style.css';
import './page-init-display';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import { displayAbout } from './about';


console.log('Today is: ' + new Date());

const tabBrowsing = (() => {
  let _menuDisplayed = 0;

  
})();

function testFunks (parentSelector, removedSelector) {
  const body = document.querySelector(`${parentSelector}`);
  const placeInfo = document.querySelector(`${removedSelector}`);
  body.removeChild(placeInfo)
}


let menuDisplayed = 0;
const option1 = document.querySelector('.option-1');
option1.addEventListener('click', ()=> {
  if (menuDisplayed) {
    return
  }
  testFunks('#body', '#place-info');
  displayMenu();
  menuDisplayed = menuDisplayed === 0 ? 1 : 0;
})


let aboutDisplayed = 0;
const option2 = document.querySelector('.option-2');
option2.addEventListener('click', ()=>{
  if (aboutDisplayed) {
    return
  }
  testFunks('#body', '#place-info');
  displayAbout();
  aboutDisplayed = aboutDisplayed === 0 ? 1 : 0;
})


let contactDisplayed = 0;
const option3 = document.querySelector('.option-3');
option3.addEventListener('click', ()=>{
  if (contactDisplayed) {
    return
  }
  testFunks('#body', '#place-info');
  displayContact();
  contactDisplayed = contactDisplayed === 0 ? 1 : 0;
})


/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/