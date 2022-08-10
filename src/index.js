console.log('bye bye bye baby bye bye bye byebye')



fetch("/data/profil.json")
.then((respons) => respons.json())
.then((data) => {

  console.log(data)

  let imageContainer = document.querySelector('.profil-image')
  imageContainer.src = data.avatar_url;
  let imageText = document.querySelector('.profil-name')
 // imageText.innerHTML = data.login;

 // imageText.innerHTML = `<b>${data.login}<b>`;
 // imageText.innerHTML = '<b>' + data.login + '<b>';
  imageText.insertAdjacentHTML('beforeend', `<b>${data.login}<b>`)

  console.log(imageContainer.src)
});

function open() {
  console.log('open')
}

open();