console.log("hello world");


import {divide} from './utils/math.js';
import {somme} from './utils/math.js';
import {plusGrandDuTmb} from './utils/math.js';
import {voyelle} from './utils/math.js';
import {alphabet} from './utils/math.js';
import {intToString} from './utils/math.js';

const a = 90;
const b = 45;
const tmb = [1,2,3,4,5,6,27374,2];
const fauxTmb = "salut";
const voyelles = "salut"
const trie = ["salit","salut",'a',"azez"];
const nombre = '20';
console.log(divide(a,b));
console.log(somme(a,b));
console.log(plusGrandDuTmb(tmb))
console.log(plusGrandDuTmb(fauxTmb))
console.log(voyelle(voyelles))
console.log(alphabet(trie))
console.log(intToString(nombre))