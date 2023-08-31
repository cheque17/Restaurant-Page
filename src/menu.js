import beefBroth from './beef-broth.jpg';
import flautas from './flautas.jpg';
import pozole from './pozole.jpg';
import tacosAsada from './tacos-de-asada.jpg';
import totopos from './totopos.jpg';
import variety from './variety-tacos.jpg';

export function testFunks (parentSelector, removedSelector) {
  const body = document.querySelector(`${parentSelector}`);
  const placeInfo = document.querySelector(`${removedSelector}`);
  body.removeChild(placeInfo)
}

export function displayMenu () {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menu-content');
  const body = document.querySelector('#body');
  body.appendChild(menuContent)

  //Menu items

  const item1Card = document.createElement('div');
  item1Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item1Card);

  const beefImg = new Image();
  beefImg.src = beefBroth;
  item1Card.appendChild(beefImg);

  const name1 = document.createElement('a');
  name1.setAttribute('href', 'https://unsplash.com/photos/3d5RQY3JuDc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  name1.innerText = 'Beef broth';
  item1Card.appendChild(name1);

//--------------------------
  const item2Card = document.createElement('div');
  item2Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item2Card);

  const flautasImg = new Image();
  flautasImg.src = flautas;
  item2Card.appendChild(flautasImg);

  const name2 = document.createElement('a');  
  name2.setAttribute('href', 'https://unsplash.com/photos/i6TWLN0vUQ8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  name2.innerText = 'Flautas';
  item2Card.appendChild(name2);
  
//--------------------------
  const item3Card = document.createElement('div');
  item3Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item3Card)

  const pozoleImg = new Image();
  pozoleImg.src = pozole;
  item3Card.appendChild(pozoleImg);

  const name3 = document.createElement('a');
  name3.setAttribute('href', 'https://unsplash.com/photos/pAU112ZIXvU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  name3.innerText = 'Pozole';
  item3Card.appendChild(name3);

//-------------------------
  const item4Card = document.createElement('div');
  item4Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item4Card)

  const asadaTacosImg = new Image();
  asadaTacosImg.src = tacosAsada;
  item4Card.appendChild(asadaTacosImg);

  const name4 = document.createElement('a');
  name4.setAttribute('href', 'https://unsplash.com/photos/2qoYTR6Yym8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  name4.innerText = 'Asada Tacos';
  item4Card.appendChild(name4);

//-------------------------  
  const item5Card = document.createElement('div');
  item5Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item5Card)

  const totoposImg = new Image();
  totoposImg.src = totopos;
  item5Card.appendChild(totoposImg);

  const name5 = document.createElement('a');
  name5.setAttribute('href', 'https://unsplash.com/photos/3bJ76UZtQdQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  name5.innerText = 'Totopo';
  item5Card.appendChild(name5);

//-----------------------
  const item6Card = document.createElement('div');
  item6Card.setAttribute('class', 'menu item');
  menuContent.appendChild(item6Card);

  const varietyImg = new Image();
  varietyImg.src = variety;
  item6Card.appendChild(varietyImg);

  const name6 = document.createElement('p');
  /*name6.setAttribute('href', 'https://unsplash.com/photos/bA3VwdUYduY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');*/
  name6.innerHTML = '<a href=\'https://unsplash.com/photos/bA3VwdUYduY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\'>Variety of tacos</a>';
  item6Card.appendChild(name6);
}