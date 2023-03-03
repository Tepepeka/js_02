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

const firstLi = document.querySelector('ul li:nth-of-type(2)')
console.log(
  firstLi.getAttribute('class'),
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
  firstLi.classList.toggle('red')
}, 1000)

//manipulation de class : add / remove / toggle (pr autre alle voir la doc)

