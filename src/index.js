import './style.css';
import './page-init-display';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import { displayAbout } from './about';


console.log('Today is: ' + new Date());

const tabBrowsing = (() => {

  const contentStatus = {
    _pageInit : 1,
    _menuDisplayed : 0,
    _aboutDisplayed : 0,
    _contactDisplayed: 0,
  }

  const contentsSelectors = {
    _pageInit: '#place-info',
    _menuDisplayed : '#menu-content',
    _aboutDisplayed : '#about-container',
    _contactDisplayed : '#reservations-container',
  }

  const _remover = (removedSelector) => {
    const body = document.querySelector('#body');
    const placeInfo = document.querySelector(`${contentsSelectors[removedSelector]}`);
    body.removeChild(placeInfo)
  }

    
  const examiner = function() {
    for (let property in contentStatus) {
      if (contentStatus[property] == 1){
        console.log(property);
        contentStatus[property] = 0;
        return (property);
      }
    }
  }
 

  const option1 = document.querySelector('.option-1');
  option1.addEventListener('click', ()=> {
  if (contentStatus._menuDisplayed) {
    return
  }
  _remover(examiner());
  displayMenu();
  contentStatus._menuDisplayed = contentStatus._menuDisplayed === 0 ? 1 : 0;
  console.log(contentStatus);
  })


  const option2 = document.querySelector('.option-2');
  option2.addEventListener('click', ()=>{
    if (contentStatus._aboutDisplayed) {
      return
    }
    _remover(examiner());
    displayAbout();
    contentStatus._aboutDisplayed = contentStatus._aboutDisplayed === 0 ? 1 : 0;
    console.log(contentStatus);
  })


  const option3 = document.querySelector('.option-3');
  option3.addEventListener('click', ()=>{
    if (contentStatus._contactDisplayed) {
      return
    }
    _remover(examiner());
    displayContact();
    contentStatus._contactDisplayed = contentStatus._contactDisplayed === 0 ? 1 : 0;
    console.log(contentStatus);
  })


  let restName = document.querySelector('#restaurant-name');
  restName.addEventListener('click', ()=>{
    console.log('I do work');
  })

  /*return {
    contents: contents,
  }*/
})();















/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/