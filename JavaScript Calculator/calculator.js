//Challenge - calculator
//@Happy scenario -  riesime iba ako keby funguje vsetko co ma.

/* 1. ziskajte referenciu na DOM element s triedou 'display' a priradte ju do premennej displayElement
//const displayElement;
*/ 
const displayElement = document.querySelector('.display');

/* 2. napiste funkciu, ktora na koniec textu v displayElement prida hodnotu z argumentu funkcie
// Priklad 1: ak displayElement neobsahuje text, tak volanie insertValueFn(1) zmeni text z '' na '1'
// Priklad 2: ak displayElement obsahuje text '11', tak volanie insertValueFn(2) zmeni text z '11' na '112'
//const insertValueFn;
 */

const insertValueFn = (addedValue) => {
    displayElement.textContent +=addedValue
};

/* 3. ziskajte referenciu na vsetky DOM elementy s triedou 'button-num' a priradte ju do premennej allNumButtons
//const allNumButtons;
*/

const allNumButtons = document.querySelectorAll('.button.button-num');

/* 4. A) s vyuzitim cyklu prejdite cez vsetky elementy ulozene v allNumButtons.
    B) zaistite, aby sa po kliknuti na kazdy button z pola 'allNumButtons' vykonala funkcia insertValueFn (vyuzite event click).
    Ako argument vo funkcii insertValueFn pouzite text, ktory ma v sebe prave stlaceny button
*/ 

for (let stlacene of allNumButtons) {
    stlacene.addEventListener('click', () => insertValueFn(stlacene.textContent));
}

/* 5. opakujete postup z kroku 3 a 4 aj pre buttony s operatormi (+, -, x, /, .)
Musite najst sposob, ako vybrat len buttons s textom +, -, x, /, .
(hint: pridajte nieco di index.html, aby ste ich vedeli identifikovat. Uprava index.html bude potrebna aj pri bodoch 6,7, a 9).
//const allOperatorButtons;
*/ 

const allOperatorButtons = document.querySelectorAll('.button.button-opr');

for (let operators of allOperatorButtons) {
    operators.addEventListener('click', () => insertValueFn(operators.textContent));
}

/* 6. Pristupte k elementu '⌦' na vymazanie jedneho znaku a ulozte si ho do konstanty.
Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal posledny znak z displeja.
//const eraseNumElement;
*/ 

const eraseNumElement = document.querySelector('.button-erase1');

eraseNumElement.addEventListener('click', () => {
    displayElement.textContent = displayElement.textContent.slice(0, displayElement.textContent.length - 1)
});

/* 7. Pristupte k elementu 'C' na vymazanie vsetkeho na display (myslim ten element).
Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal cely obsah displeja.
// const eraseAllElement;
*/ 

const eraseAllElement = document.querySelector('.button-clear');

eraseAllElement.addEventListener('click', () => {
    displayElement.textContent = '';
});

/* 8. Do konstanty doTheMath priradte nasu funkciu, ktora zoberie priklad z displeja a vypocita ho pomocou funkcie eval()
//dokumentacia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
//const doTheMath;
*/ 

const doTheMath = () => {
    const calculationString = displayElement.textContent.replaceAll('x', '*');
    displayElement.textContent = eval(calculationString);
};

/* 9. pristupte ku elementu '=' a zaistite, aby sa po kliknuti vykonal vypocet pomocou funkcie doTheMath()
// const executeElement;
*/ 

const executeElement = document.querySelector('#execute');
executeElement.addEventListener('click', doTheMath);

/* 10. BONUS - mozno ste uz zistili, ze nasobenie nefunguje. Problemom je, ze na nasobenie pouzivame symbol 'x' namiesto symbolu '*'.
Klient od nas ale chce, aby sme aj nadalej zobrazovali 'x'.
Ake mame moznosti na vyriesenie tohto problemu?
(HINT: skuste manipulaciu textu vo funkcii doTheMath)
 */