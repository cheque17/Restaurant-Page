import './style.css';
import './page-init-display';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import { displayAbout } from './about';


console.log('Today is: ' + new Date());

const tabBrowsing = (() => {
  let _menuDisplayed = 0;
  let _aboutDisplayed = 0;
  let _contactDisplayed = 0;

  const _remover = (parentSelector, removedSelector) => {
    const body = document.querySelector(`${parentSelector}`);
    const placeInfo = document.querySelector(`${removedSelector}`);
    body.removeChild(placeInfo)
  }


  const option1 = document.querySelector('.option-1');
  option1.addEventListener('click', ()=> {
  if (_menuDisplayed) {
    return
  }
  _remover('#body', '#place-info');
  displayMenu();
  _menuDisplayed = _menuDisplayed === 0 ? 1 : 0;
})


  let restName = document.querySelector('#restaurant-name');
  restName.addEventListener('click', ()=>{
    console.log('I do work');
  })
})();








const option2 = document.querySelector('.option-2');
option2.addEventListener('click', ()=>{
  if (aboutDisplayed) {
    return
  }
  testFunks('#body', '#place-info');
  displayAbout();
  aboutDisplayed = aboutDisplayed === 0 ? 1 : 0;
})



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