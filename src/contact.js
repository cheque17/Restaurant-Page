export function displayContact (){
  console.log('I\'m working');

  const body = document.querySelector('#body');
  const contactInfo = document.createElement('div');
  contactInfo.setAttribute('id', 'contact-info');
  body.appendChild(contactInfo);

  //Information

  const title = document.createElement('h1');
  title.innerText = 'Ways to contact us';
  contactInfo.appendChild(title);

  const reservationsContainer = document.createElement('div');
  reservationsContainer.setAttribute('id', 'reservations-container');
  contactInfo.appendChild(reservationsContainer);

  const reservations = document.createElement('h2');
  reservations.innerText = 'Restaurant Phone Number for Reservations:';
  reservationsContainer.appendChild(reservations);

  const reservationsNumber = document.createElement('p');
  reservationsNumber.innerText = '777-777-7777';
  reservationsContainer.appendChild(reservationsNumber);

  const criticsContainer = document.createElement('div');
  criticsContainer.setAttribute('id', 'critics-container');
  contactInfo.appendChild(criticsContainer);

  const critics = document.createElement('h2');
  critics.innerText = 'Send your complains and suggestions to:';
  criticsContainer.appendChild(critics);

  const criticsNumber = document.createElement('p');
  criticsNumber.innerText = 'generic_restaurant17@genericservice.com'
  criticsContainer.appendChild(criticsNumber);

  const subscriptionContainer = document.createElement('div');
  subscriptionContainer.setAttribute('id', 'suscription-container');
  contactInfo.appendChild(subscriptionContainer);
  
  const subscribe = document.createElement('p');
  subscribe.innerText = 'Please, make sure to subscribe to our weekly news letter ';
  subscriptionContainer.appendChild(subscribe);

  const suscriptionLink = document.createElement('a');
  suscriptionLink.setAttribute('href', 'https://www.theodinproject.com/dashboard');
  suscriptionLink.innerText = 'here.';
  subscribe.appendChild(suscriptionLink);

}

