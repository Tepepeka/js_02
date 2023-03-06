/*Fonctionne comme un selecteur CSS
getElementById peut etre utile si on veut quelque chose de precis
le reste ne s'utilise plus trop on utilisera le queryselector*/
const lis = document.querySelectorAll('li');

//Node list
console.log(lis);
console.log(lis[1]);
console.log(lis.length);
lis.forEach(v => console.log(v));
//Array list
console.log(Array.from(lis));

const ul = document.querySelector('ul');
console.log(
  //nom du noeud HTML(apparait en maj)
  ul.nodeName,
  //recupere la structure html a l'interieur, on peut le modifier ul.innerHTML = "hello"
  ul.innerHTML,
  //recupere le juste texte (retire les epace et elements)
  ul.innerText,
  //contenu du texte avec les espaces (les hidden apparaissent et contenu)
  ul.textContent
);

//fais dispaitre les ul
ul.setAttribute('hidden', 'hidden')
// fais re apparaitre les ul
ul.removeAttribute('hidden')

const secondtLi = document.querySelector('ul li:nth-of-type(2)')
console.log(
  secondtLi.getAttribute('class'),
  ul.classList
  /*remove class
  ul.classList.remove('red')
  */
 /*add class
  ul.classList.add('blue')
  */
);

setInterval(() => {
  //toggle ca switch
  secondtLi.classList.toggle('red')
}, 1000)

//manipulation de class : add / remove / toggle (pr autre alle voir la doc)

const thirdLi = document.querySelector('ul li:nth-of-type(3)')

thirdLi.style.color = 'bueviolet'
thirdLi.style.fontWeight = 'bold'
console.log(getComputedStyle(thirdLi).color);

const newLi = document.createElement('li')
newLi.innerHTML = "Hi tppk!"
document.querySelector('ul').append(newLi) //regarder appenchild aussi histoire de noeuds, prepend si on veut add au debut

const div = document.createElement('div')
div.innerHTML= "Hi tepepeka!"
ul.insertAdjacentElement('beforebegin', div)
//utiliser append ou prepend pr ajouter au debut ou a la fin ds l'element, si en dehors de l'elem insert avec beforebegin et afterbegin

console.log(
  ul.children,
  ul.childNodes
);

console.log(
  secondtLi.parentNode
);


//Exo
/**
 * Crée un element html representant un article
 * @param {{title: string, body: string}} post
 * @return {HTMLElement}
 */

function createArticle(post) {
  const article = document.createElement('article')
  article.append(createElementWithText('h2', post.title))
  article.append(createElementWithText('p', post.body))
  return article
}

function createElementWithText(tagName, content) {
  const element = document.createElement(tagName)
  element.innerText = content
  return element
}


async function main(){
  const wrapper = document.querySelector('#lastPosts')
  const loader = document.createElement('p')
  loader.innerText = 'load...'
  wrapper.append(loader)
  try {
    const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
      headers:{
        Accept: 'application.json'
      }
    })
    if (!r.ok){
      throw new Error('serv error')
    }

    const posts = await r.json()
    loader.remove()
    for (let post of posts){
      wrapper.append(createArticle(post))
    }

  } catch(e) {
    loader.innerText = 'Cannot load posts'
    loader.style.color = 'red'
    return
  }
}

main()