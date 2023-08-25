import './style.css';
//import './page-init-display'
import Icon from './bkg-img.jpg';
import FaceIcon from './facebook.png'


console.log('Today is: ' + new Date());

const contentContainer = document.querySelector('#content');
console.dir(contentContainer);


/*Function to create new elements and function to append them



/*Header Creation*/
const header = document.createElement('div');
header.setAttribute('id', 'header')
contentContainer.appendChild(header);

/*Add details to the header*/
const restaurantName = document.createElement('div');
restaurantName.setAttribute('id', 'restaurant-name');
restaurantName.innerText= 'Generic Restaurant';
header.appendChild(restaurantName);
 
const options = document.createElement('div');
options.setAttribute('id', 'options');
header.appendChild(options);

const option1 = document.createElement('div');
option1.setAttribute('class', 'option-1');
const menu = document.createElement('a');
menu.innerText = 'Menu';
option1.appendChild(menu);
options.appendChild(option1);

const option2 = document.createElement('div');
option2.setAttribute('class', 'option-2');
const about = document.createElement('a');
about.innerText = 'About us';
option2.appendChild(about);
options.appendChild(option2);

const option3 = document.createElement('div');
option3.setAttribute('class', 'option-3');
const contact = document.createElement('a');
contact.innerText = 'Contact us';
option3.appendChild(contact);
options.appendChild(option3);







const body = document.createElement('div');

const footer = document.createElement('div');


/*const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);*/