
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
  <img class="profileimg" src="${profile.img}" >
  <p> ${profile.name} ${profile.lastname} er ${profile.age} år og ${profile.sex} bor i ${profile.city}.</p>
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