export function displayAbout() {
  console.log('Getting the job done!');

  const body = document.querySelector('#body');

  const aboutInformation = document.createElement('div');
  aboutInformation.setAttribute('id', 'about-container');
  body.appendChild(aboutInformation);

  const aboutTitle = document.createElement('h1');
  aboutTitle.innerText = "More about us";
  aboutInformation.appendChild(aboutTitle);

  const informationContainer = document.createElement('div');
  informationContainer.setAttribute('id','info-container');
  aboutInformation.appendChild(informationContainer);

  const textInfo = document.createElement('p');
  textInfo.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatem consectetur commodi quas sequi beatae perspiciatis impedit! Modi eligendi itaque odit! Iure labore eveniet corrupti itaque illo facere sequi rerum dolorum quidem fugiat, debitis exercitationem maiores laboriosam dolore eligendi fugit autem? Nesciunt rerum est assumenda officiis laudantium fuga consectetur deleniti id. Animi repellat quasi reiciendis cum recusandae amet provident fuga accusamus excepturi iure autem ullam, dolorem consequatur cupiditate quidem! Nesciunt provident corrupti reiciendis in. Beatae corrupti nam impedit ducimus optio repudiandae modi debitis dicta nesciunt, vero, laudantium dignissimos qui dolor. Suscipit ab similique voluptatum quis, in dicta quasi sapiente temporibus aperiam tempora, asperiores animi facilis labore ducimus molestiae nostrum eos iste corrupti deleniti commodi perspiciatis voluptatem numquam! Perspiciatis officiis incidunt deleniti saepe est enim ipsum accusantium nemo exercitationem hic non minima impedit quia modi libero, molestias quae maiores ad tempore dolores. Vel expedita, nobis reprehenderit aspernatur officia iste illum dolore?';
  informationContainer.appendChild(textInfo);

}