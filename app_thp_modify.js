function changeTitles(){
  const title1 = document.querySelector('h1');
  title1.innerText = "TepepeKa MasTeR"
  const title2 = document.querySelector('p.lead');
  title2.innerText = "Grafikart is the best !!"
}

changeTitles()


function changeCallToActions(){
  const button1 = document.querySelector('.jumbotron .btn:first-of-type')
  button1.textContent = "My github"
  button1.href = "https://github.com/Tepepeka"
  const button2 = document.querySelector('.jumbotron .btn:nth-of-type(2)')
  button2.textContent = "My insta"
  button2.href ="https://www.instagram.com/bourgoinjeremy/?hl=de"
}

changeCallToActions()


function changeLogoName(){
  const navbarTitle = document.querySelector('.navbar-brand strong')
  navbarTitle.textContent = "TppK"
  navbarTitle.style.fontSize = "2em"
}

changeLogoName()


function populateImages(){
  const images = document.querySelectorAll("img")
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://img.icons8.com/color/480/000000/heroku.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  for (let i = 0; i < imagesArray.length; i++) {
    images[i].src = imagesArray[i]
  }
}

populateImages()


function deleteLastCards(){
  const cards = document.querySelectorAll(".card")
  for (let i = cards.length - 1; i >= cards.length - 3; i--){
    cards[i].remove()
  }
}

deleteLastCards()


function changeCardsText(){
  let textsArray = ["<u>Carte HTML</u> : L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "<u>Carte CSS</u> : Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "<u>Carte JS</u> : JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
  const cards = document.querySelectorAll(".card-text")
  for (let i = 0; i < textsArray.length; i++){
    cards[i].innerHTML = textsArray[i]
  }
}

changeCardsText()


function changeViewButtons(){
  const buttonsView = document.querySelectorAll('.btn-group .btn-outline-secondary:first-of-type')
  for (let i = 0; i < buttonsView.length; i++){
    buttonsView[i].classList = 'btn btn-sm btn-success'
  }
}

changeViewButtons()