// fonction pour choisir une lettre au hasard dans un tableau de lettres
function randomLetter(letters) {
  return letters[Math.floor(Math.random() * letters.length)];
}

// fonction pour vérifier si toutes les lettres d'un mot sont dans un autre tableau de lettres
function checkLettersInWord(letters, word) {
  for (let i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      return false;
    }
  }
  return true;
}

// tableau des voyelles et des consonnes
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// tableau pour stocker les lettres produites
let letters = [];

// demander à l'utilisateur de choisir entre voyelle et consonne 10 fois
for (let i = 0; i < 10; i++) {
  let choice = prompt('Voulez-vous une voyelle ou une consonne ? Entrez "v" pour voyelle ou "c" pour consonne');
  let letter;
  if (choice === 'v') {
    letter = randomLetter(vowels);
  } else if (choice === 'c') {
    letter = randomLetter(consonants);
  } else {
    alert('Choix invalide. Veuillez entrer "v" pour voyelle ou "c" pour consonne.');
    i--;
    continue;
  }
  letters.push(letter);
}

// afficher les lettres produites et lancer un compte à rebours de 10 secondes
alert('Les lettres produites sont : ' + letters.join(', '));
let startTime = new Date().getTime();
let elapsedTime;
let timeLimit = 10000;
let word = '';

// attendre que l'utilisateur écrive un mot qui utilise exclusivement des lettres parmi les lettres produites
while (true) {
  elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime >= timeLimit) {
    alert('Temps écoulé. Vous avez perdu.');
    break;
  }
  let input = prompt('Ecrivez un mot en utilisant seulement les lettres produites. Il vous reste ' + Math.floor((timeLimit - elapsedTime) / 1000) + ' secondes.');
  if (input === null) {
    alert('Vous avez abandonné. Vous avez perdu.');
    break;
  }
  word = input.trim().toLowerCase();
  if (word.length === 0) {
    alert('Vous devez écrire un mot.');
  } else if (!checkLettersInWord(letters, word)) {
    alert('Le mot contient des lettres qui ne sont pas dans la liste des lettres produites. Vous avez perdu.');
    break;
  } else {
    alert('Bravo, vous avez trouvé un mot qui utilise toutes les lettres. Votre score est ' + word.length);
    break;
  }
}
