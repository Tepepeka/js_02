const p = document.querySelectorAll('p');
console.log(`1/ Number of paragraph : ${p.length}`);


const hello = document.getElementById('coucou')
console.log(`2/ Text of element <id:"coucou"> : ${hello.innerText}`);


const a = document.querySelectorAll('a');
console.log(`3/ Url of 3 element of <a> : ${a[2].href}`);


const countMe = document.querySelectorAll('.compte-moi');
console.log(`4/ Number of element with <class="compte-moi"> : ${countMe.length}`);
//console.log(countMe);


const countMeLi = document.querySelectorAll('li.compte-moi');
console.log(`5/ Number of <li> element with <class="compte-moi"> : ${countMeLi.length}`);
//console.log(countMeLi);


const countMeUlLi = document.querySelectorAll('ol li.compte-moi');
console.log(`6/ Number of <li> in <ol> element with <class="compte-moi"> : ${countMeUlLi.length}`);
//console.log(countMeUlLi);


const hidden = document.querySelector('div ul:nth-of-type(2) li:first-of-type')
console.log(`7/ Hidden text : ${hidden.textContent}`);