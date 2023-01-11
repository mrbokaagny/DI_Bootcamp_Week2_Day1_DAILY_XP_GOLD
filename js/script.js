// Exo 1 : Couleur Préférée

// affichage de la jointure 
let sentence = ["my","favorite","color","is","blue"];
sentence.join(" ")
console.log(sentence.join(" "));

// Exo 2 : Mixup

// creation des deux variables
let str1 = "mix";
let str2 = "pod";

// decoupage et changement
str1.replace("mi" ,"po");
str2.replace("po", "mi");

// creation de la troisième variable
let newString = str1.replace("mi" ,"po")+ ' ' + str2.replace("po", "mi");;

console.log(newString);

// Exo 3 : calculatrice

let first_number = prompt("saisissez un numéro : ");

first_number = parseInt(first_number);

let second_number = prompt("saisissez un second numéro :");
second_number = parseInt(second_number);

let resultat;

let operator = prompt("quel opération souhaité vous faire? (+, -, /, *");

switch(operator) {
    case '+' :
        resultat = first_number + second_number;
        break;
    case '-' :
        resultat = first_number - second_number;
        break;
    case '*' :
        resultat = first_number * second_number;
        break;
    case '/' :
        resultat = first_number / second_number;
        break;
    default :
        resultat = "erreur";
        break
}

alert(` Le resultat de l'operation est : ${resultat}`);
