console.log("hello world");


import {divide} from './utils/math.js';
import {somme} from './utils/math.js';
import {plusGrandDuTmb} from './utils/math.js';
import {voyelle} from './utils/math.js';
import {alphabet} from './utils/math.js';
import {intToString} from './utils/math.js';
import {objKey} from './utils/math.js';
import {triNumber} from './utils/math.js';
import {voyelleToMaj} from './utils/math.js';
import {count} from './utils/math.js';
import {consonneToMaj} from './utils/math.js';

const a = 90;
const b = 45;
const tmb = [1,2,3,4,5,6,27374,2];
const fauxTmb = "salut";
const voyelles = "salut"
const trie = ["salit","salut",'a',"azez"];
const nombre = '8';
const obj = [{name:'noah'},{name:'ze',nom:'eee'},{name:'eee',nom:'eee'}]
const triNumbers = [1,2,3,10,5,30000];
const voyelless = "salut"
console.log(divide(a,b));
console.log(somme(a,b));
console.log(plusGrandDuTmb(tmb));
console.log(plusGrandDuTmb(fauxTmb));
console.log(voyelle(voyelles));
console.log(alphabet(trie));
console.log(intToString(nombre));
console.log(objKey(obj));
console.log(triNumber(triNumbers));
console.log(voyelleToMaj(voyelless));
console.log(count(voyelless));
console.log(consonneToMaj(voyelless));

const tableau = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}

const jour = ["lundi",'mardi','mercredie','jeudi','vendredi','samedi','dimanche'];

console.log(jour[0]);

const pair = [2,4,6,8,10];
const initialValue=0;
console.log(pair.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue,));
//j'ai trouver le reduce sur la mdn

const fruit = ["pomme","poire","kiwi","banane",'raisin'];

fruit.push('orange');

console.log("fruit");

const note = [1,5,20,10,17];
console.log(note.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue,)/note.length);

const oiseau = ["pie","rouge george"];
console.log(oiseau.includes('pie'))

const pays = ['france',"canada",'suisse','belgique'];
console.log(pays.sort())

const mois = ['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
console.log(mois[2]);
//vue que on demende le 3eme element j'ai mis [2] car la valeur 0 compte

