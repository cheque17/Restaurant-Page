import beefBroth from './beef-broth.jpg';
import flautas from './flautas.jpg';
import pozole from './pozole.jpg';
import tacosAsada from './tacos-de-asada.jpg';
import totopos from './totopos.jpg';
import variety from './variety-tacos.jpg';

export function testFunks () {
  console.log('It\'s alive!!!');
}

export function displayMenu () {
  const menuContent = document.createElement('div');

  //Menu items

  const item1Card = document.createElement('div');
  item1Card.setAttribute('class', 'menu item');

  const beefImg = new Image();
  beefImg.src = beefBroth;
  item1Card.appendChild(beefImg);

  const name1 = document.createElement('p');
  name1.innerText = 'Beef broth';
  item1Card.appendChild(name1);

//--------------------------
  const item2Card = document.createElement('div');
  item2Card.setAttribute('class', 'menu item');

  const flautasImg = new Image();
  flautasImg.src = flautas;
  item2Card.appendChild(flautasImg);

  const name2 = document.createElement('p');
  name2.innerText = 'Flautas';
  item2Card.appendChild(name2);
  
//--------------------------
  const item3Card = document.createElement('div');
  item3Card.setAttribute('class', 'menu item')

  const pozoleImg = new Image();
  pozoleImg.src = pozole;
  item3Card.appendChild(pozoleImg);

  const name3 = document.createElement('p');
  name3.innerText - 'Pozole';
  item3Card.appendChild(name3);

//-------------------------
  const item4Card = document.createElement('div');
  item4Card.setAttribute('class', 'menu item')

  const asadaTacosImg = new Image();
  asadaTacosImg.src = tacosAsada;
  item4Card.appendChild(asadaTacosImg);

  const name4 = document.createElement('p');
  name4.innerText = 'Asada Tacos';
  item4Card.appendChild(name4);

//-------------------------  
  const item5Card = document.createElement('div');
  item5Card.setAttribute('class', 'menu item')

  const totoposImg = new Image();
  totoposImg.src = totopos;
  item5Card.appendChild(totoposImg);

  const name5 = document.createElement('p');
  name5.innerText = 'Totopo';
  item5Card.appendChild(name5);

//-----------------------
  const item6Card = document.createElement('div');
  item6Card.setAttribute('class', 'menu item');

  const varietyImg = new Image();
  varietyImg.src = variety;
  item6Card.appendChild(variety);

  const name6 = document.createElement('p');
  name6.innerText = 'Variety of tacos';
  item6Card.appendChild(name6)
}