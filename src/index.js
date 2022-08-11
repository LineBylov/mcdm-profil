
const renderProfileData = () => {

  fetch("/data/profil.json")
  .then((respons) => respons.json())
  .then((data) => {
  
    console.log(data)
  
    let imageContainer = document.querySelector('.profil-image')
    imageContainer.src = data.avatar_url;
    let imageText = document.querySelector('.profil-name')
   // imageText.innerHTML = data.login;
  
    imageText.innerHTML = `<b>${data.login}<b>`;
   // imageText.innerHTML = '<b>' + data.login + '<b>';
   // imageText.insertAdjacentHTML('beforeend', `<b>${data.login}<b>`)
  
   // console.log(imageContainer.src)
  });
}
// renderProfileData();


const renderProfilList = (profileList) => {

  let profileListContainer = document.querySelector('#profileList')

  let userTmpl = (profile) => `
  <div class="profileContent">
    <h1>${profile.name} ${profile.lastname}</h1>
    <div class="imgcenter">
      <img class="profileimg" src="${profile.img}" >
    </div>
    <p> ${profile.name} ${profile.lastname} er ${profile.age} år og ${profile.sex} bor i ${profile.city}.</p>
  
    <div class="line"></div>

    <div>
      <p> 
        Navn: ${profile.name} ${profile.lastname}
        <br>
        Alder: ${profile.age}
        <br>
        Køn: ${profile.sex}
        <br>
        By: ${profile.postalcode}, ${profile.city}
      </p>
    </div>

  </div>
  `

  profileList.map((profile) => {
    profileListContainer.insertAdjacentHTML('beforeend', userTmpl(profile));
  })

}

const getProfilList = () => {

  return fetch('/data/profileList.json')
  .then((respons) => respons.json());
  
}

getProfilList() .then((profileList) => renderProfilList(profileList))