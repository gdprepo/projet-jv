'use strict';

console.log('Bonjour');

let username;
username = 'Jeremy';
console.log(username);
username = 'toto';
console.log(username);
username = 'toto2';
console.log('Username = '+ username);
username = 3;
// username = "Jeremy";
let userStatus = 10;

console.log(username);
console.log(userStatus);


// Ajoutez 10 et 32. Incrémentez le résultat de 8 avec l'opérateur +=.

console.log(userStatus += 32);
console.log("Resultat = ", userStatus += 8);

//Soustrayez 5 de 10. Décrémentez le résultat de 5 avec l'opérateur -=.
userStatus = 10;
console.log(userStatus -= 5);

//Multipliez 5 par 7. Multipliez le résultat par 2 avec l'opérateur *=.
userStatus = 5;
console.log(userStatus *= 7);
//Divisez 10 par 2. Divisez le résultat par 2 avec l'opérateur /=.
userStatus = 10;
console.log(userStatus /= 2);
//Déclarez une variable avec la valeur 5. Incrémentez-la de 1 avec l'opérateur ++.
userStatus = 5;
userStatus++;
console.log(userStatus);
//Déclarez une variable avec la valeur 5. Décrémentez-la de 1 avec l'opérateur --.
userStatus = 5;
userStatus--;
console.log(userStatus);



//Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1.
if (2 > 1) {
    console.log("2 > 1", true);
}
//Ecrivez en ligne de code un moyen de vérifier si 2 est inférieur à 1.

console.log("2 < 1", 2 < 1);

//Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.

console.log("20 >= 10", 20 >= 10);

//Ecrivez en ligne de code un moyen de vérifier si 10 est supérieur ou égal à 10.

console.log("10 >= 10", 10 >= 10);

//Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.

console.log("4 != 6", 4 != 6);

//Ecrivez en ligne de code un moyen de vérifier si '2' est égal à 2 avec l'opérateur d'égalité stricte.

console.log("'2' == 2", '2' == 2);

//Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.

console.log("'0' !== 0", '0' !== 0);

//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.

console.log("'hello' == 'hello'", 'hello' == 'hello');

//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.

console.log("'hello' == 'Hello'", 'hello' == 'Hello');

let a = 20 / 2;
if (a > 10 || a < 15) {
    console.log('YES');
} else {
    console.log('NO');
}

let isPrivate = true;
let isMember = false;

if (isPrivate === false || (isPrivate === true && isMember === true)) {
    console.log('can see the group');
} else {
    console.log(`can't see the gorup`);
}


const today = "jeudi";

switch (today) {
    case "lundi":
        console.log('ON est lundi');
        break;
    case "mardi":
        console.log('ON est mardi');
        break;
    case "jeudi":
    case "vendredi":
        console.log('ON est jeudi ou vendredi');
        break;
    default:
        console.log("Aujourd'hui on est pas mardi ni lundi");
}

let user = prompt("What is your name");
console.log('username', user);

//if (user) {
  //  alert(`Nice to meet you ${user}`);
//} else {
  //  alert(`Don't be shy !`);
//}
    

user ?
    alert(`Nice to meet you ${user}`) :
    alert(`Don't be shy !`);


function myFunc(text) {
    // code here
    console.log(text);
    return
}
console.log('myFunc', myFunc('text'));

const myFunc2 = (text) => {
    //code here
    return text;
}
console.log('myFunc2', myFunc2('okok'));

const sum = (p1, p2 = 0) => {
    //code here
    return p1 + p2;
}

console.log('sum', sum(2, 2));

const truncate = (str, length, trail = '...') => {
    if (str.length > length) {
        return str.substring(0, length) + trail
    } else {
        return str
    }
}

const res1 = truncate('I will be truncated', 15, '->')

console.log('res1', res1);

const res2= truncate('I will be truncated', 5)
console.log('res2', res2);


const myArray = [1, 'hello', [1, 2, 3]]
console.log('myArray', myArray);
console.log(typeof myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray[myArray.length-1]);

const arr = [0, 1, 2, 3, 4, 5]
arr.map(x => {
    console.log('x', x);
    return x / 2;
});

let res = [];
arr.forEach(num => {
    console.log('num', num);
    res.push(num / 2);
})
console.log('res', res);


//const myArr = [1, 2, 3];
//const myArr2 = myArr;
//myArr2[0] = 0;
//console.log(myArr)
//console.log(myArr2)

const myArr = [1, 2, 3];
const myArr2 = [...myArr];

const user_obj = {
    id: 1,
    name: 'Jeremy',
    email: 'email@email.com',
    car: {
        color: 'red'
    },
    test: [1, 2, 3],
}

// Créez un objet avec les valeurs suivantes: id = 1, name = Jeremy, email = jeremy@ynov.com.

// Loggez l'id de cet objet avec un point.
console.log(user_obj.id);
// Loggez l'id de cet objet avec les crochets.
console.log(user_obj['id']);
console.log(user_obj.car.color);
console.log(user_obj['car'].color)



const cart = [
    { item: 'a', price:2, quantity: 1},
    { item: 'b', price:3, quantity: 1},
    { item: 'c', price:4, quantity: 1},
];

const res_cart = cart.reduce((acc, curVal) => {
    console.log('acc', acc);
    console.log('curVal', curVal);
    return acc += curVal.price * curVal.quantity;
}, 0);

console.log('res_cart', res_cart);
// Déclarez une variable avec la valeur 'name'. Accédez à la propriété 'name' de votre objet par cette variable et les crochets [].

// Changez la valeur d'id dans votre objet à 2.

// Ajoutez à votre objet une nouvelle propriété 'human' de valeur true.

// Changez la valeur de la propriété 'email' à undefined.

