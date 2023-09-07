import './style.css';
import './page-init-display';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import { displayAbout } from './about';


console.log('Today is: ' + new Date());

const tabBrowsing = (() => {

  let contents = {
    _menuDisplayed : 0,
    _aboutDisplayed : 0,
    _contactDisplayed: 0,
  }

  const _remover = (removedSelector) => {
    const body = document.querySelector('#body');
    const placeInfo = document.querySelector(`${removedSelector}`);
    body.removeChild(placeInfo)
  }

    
  const examiner = function() {
    for (let property in contents) {
      if (contents[property] == 1){
        console.log(property);
        contents[property] = 0;
      }
    }
  }
 

  const option1 = document.querySelector('.option-1');
  option1.addEventListener('click', ()=> {
  if (contents._menuDisplayed) {
    return
  }
  _remover('#place-info');
  displayMenu();
  contents._menuDisplayed = contents._menuDisplayed === 0 ? 1 : 0;
  console.log(contents);
  examiner();
})


  let restName = document.querySelector('#restaurant-name');
  restName.addEventListener('click', ()=>{
    console.log('I do work');
  })

  /*return {
    contents: contents,
  }*/
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