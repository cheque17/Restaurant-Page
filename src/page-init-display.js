const contentContainer = document.querySelector('#content');

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



//Body creation 
const body = document.createElement('div');
body.setAttribute('id', 'body');
contentContainer.appendChild(body);

//Body details
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
infoPlace.appendChild(smallPart);


//Footer creation
const footer = document.createElement('div');
footer.setAttribute('id', 'footer');
contentContainer.appendChild(footer);

const invitation = document.createElement('div');
invitation.setAttribute('class', 'invitation');
footer.appendChild(invitation);

const footerText = document.createElement('p');
footerText.innerText = 'Follow us in our social media.';
invitation.appendChild(footerText);

const socialMedia = document.createElement('div');
socialMedia.setAttribute('class', 'social-media');
invitation.appendChild(socialMedia);


const facebookLink = document.createElement('a');
facebookLink.setAttribute('href', 'https://www.flaticon.com/free-icons/facebook');
facebookLink.setAttribute('title', 'facebook icons');
socialMedia.appendChild(facebookLink);

const facebookIcon = document.createElement('div');
facebookIcon.setAttribute('class', 'facebook');
facebookLink.appendChild(facebookIcon);


const instagramLink = document.createElement('a');
instagramLink.setAttribute('href', 'https://www.flaticon.com/free-icons/instagram');
instagramLink.setAttribute('title', 'instagram icons');
socialMedia.appendChild(instagramLink);

const instagramIcon = document.createElement('div');
instagramIcon.setAttribute('class', 'instagram');
instagramLink.appendChild(instagramIcon);


const tiktokLink = document.createElement('a');
tiktokLink.setAttribute('href', 'https://www.flaticon.com/free-icons/tik-tok');
tiktokLink.setAttribute('title', 'tik-tok icons');
socialMedia.appendChild(tiktokLink);

const tiktokIcon = document.createElement('div');
tiktokIcon.setAttribute('class', 'tik-tok');
tiktokLink.appendChild(tiktokIcon);


const odin = document.createElement('div');
odin.setAttribute('class', 'odin');
footer.appendChild(odin);

const odinText = document.createElement('p');
odinText.innerHTML = 'This is a project made for <a href="https://www.theodinproject.com/dashboard">The Odin Project.</a>';
odin.appendChild(odinText);
