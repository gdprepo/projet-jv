'use strict';

function useSortingHat(char) {
  let choice = ''
  
  switch (char) {
    case 'Harry Potter':
      choice = 'Gryffindor';
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
    default:
      'Gryffindor'
  }
  return (choice)
}

let myCharacter = 'Luna Lovegood';

let myCharacterHouse = useSortingHat(myCharacter)

const checkMyGringottsAccount = () => {
  let myMoney = Math.random() * 100;

  if (myMoney > 0 || myMoney < 30) {
    return ('Hello Weasley');
  } else if ( myMoney > 30 ||  myMoney < 75 ) {
    return ("Hey, that s cool");
  } else {
    return ("You're reach!");
  }
}

let isMyCharacterRich = checkMyGringottsAccount()
console.log("myCharacterHouse", myCharacterHouse);
console.log("isMyCharacterRick", isMyCharacterRich);