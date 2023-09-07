export function displayPlace () {

  const body = document.querySelector('#body');

  const infoPlace = document.createElement('div');
  infoPlace.setAttribute('id', 'place-info');
  body.appendChild(infoPlace);//important

  const bigPart = document.createElement('p');
  bigPart.setAttribute('class', 'part big');
  bigPart.innerText = 'THIS IS A FANTASTIC GENERIC RESTAURANT';
  infoPlace.appendChild(bigPart);

  const smallPart = document.createElement('p');
  smallPart.setAttribute('class', 'part small');
  smallPart.innerText = 'We\'re thankful for your interest in our Restaurant, we appreciate the support and we\'ll do our best to continue providing the best service in the area!!!';
  infoPlace.appendChild(smallPart)
}