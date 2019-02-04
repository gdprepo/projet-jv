'use strict';

// Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs', myDivs);

// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2', myDivs2);


// // Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// const myParagraphs2 = document.querySelectorAll('secondary-paragraph');

// // Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl2 = document.querySelector('#js-unique-el');

// // Trouvez toutes les balises p qui se trouvent dans un div.
// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myParagraphsInDivs', myParagraphsInDivs);
// // Trouvez toutes les balises span qui sont précédées par un div.
// const spansPreceededByDivs = document.querySelector('div + span');
// console.log('spansPreceededByDivs', spansPreceededByDivs);

// -----------------------------------------------------------------------------------------------

// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
// const firstP= document.querySelector('.first-p');
// firstP.innerText = 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// // Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
// const secondP = document.querySelector('.second-p');
// secondP.innerHTML = '<span>Hello</span>';
// console.log('secondP html', secondP.innerHTML);

// // Modifiez les attributs width à 50% et height à 'auto' de l'image.
// const myImg = document.querySelector('img');
// myImg.setAttribute('width', '50%');
// myImg.setAttribute('height', 'auto');

// // Ajoutez un attribut alt non vide à l'image.
// myImg.setAttribute('alt', 'Random image');

// // Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
// firstP.style.color = 'blue';
// firstP.style.fontSize =  '1.5em';

// // Ajoutez la classe img à l'image.
// myImg.className = 'my-class'; // myImg.className += 'another-class'
// myImg.classList.add('my-class');
// myImg.classList.remove('some-class');


// -----------------------------------------------------------------------------------------------

const myBody = document.querySelector('body');
// const newEl = document.createElement('p');
// newEl.innerText = 'Hello';
// newEl.style.color = 'red';

// // dernier enfant
// myBody.appendChild(newEl);


// const newEl2 = document.querySelector('p');
// newEl2.innerText ='Hello';
// newEl2.style.color = 'yellow';
// // premier enfant
// myBody.prepend(newEl2);

// myBody.removeChild(newEl2);



// --------------------------------------------------------------------------------------------------
// console.log(window);
// const section_navigator = document.getElementById('js-navigator');
// section_navigator.innerText = 'Nom de navigateur : ' + window.navigator.userAgent;
// myBody.prepend(section_navigator)

// const section_navigator2 = document.getElementById('js-navigator');
// section_navigator2.innerText = 'Nom de navigateur : ' + window.navigator.userAgent + '\n\n';
// myBody.prepend(section_navigator2)

// const text_navigateur = document.createElement('h1');
// text_navigateur.innerText ='Browser Object Model \nNavigator ';
// myBody.prepend(text_navigateur);


// var txt = '';
// txt += "<p>Langage: " + navigator.language + "</p>";
// txt += "<p>Navigateur en ligne: " + navigator.onLine + "</p>";
// txt += "<p>Plateforme de mon ordinateur : " + navigator.platform + "</p>";
// txt += "<p>Cookie activés: " + navigator.cookieEnabled + "</p>";

// txt += "<h1>Screen\n</h1>";
// txt += "<p>Largeur de l'écran: " + screen.availWidth + "px"  + "</p>";
// txt += "<p>Hauteur de l'écran: " + screen.availHeight + "px"  + "</p>";

// document.getElementById("js-navigator").innerHTML = txt;

// --------------------------------------------------------------------------------------------------

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked', event);
})

let isClicked = false;
const myGrayBtn = document.querySelector('#js-grey-btn');
myGrayBtn.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked) {
        myGrayBtn.style.backgroundColor = 'green';
    } else {
        myGrayBtn.style.backgroundColor = 'inherit';
    }
    
})

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
})
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'initial';
})

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Mouse right button is clicked');
})


const myForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-input');

myInput.addEventListener('keyup', (event) => {
    console.log('event', event);
    console.log('input value : ', myInput.value);
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (myInput.value)
        alert(myInput.value);
})