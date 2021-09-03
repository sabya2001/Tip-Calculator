const bill = document.querySelector(".values1");
const person = document.querySelector(".values2");
const custom = document.querySelector(".Custom");
let tipAmount1 = document.querySelector("#A1");
let tipAmount2 = document.querySelector("#A2");
let tipAmount3 = document.querySelector("#A3");
let tipAmount4 = document.querySelector("#A4");
let tipAmount5 = document.querySelector("#A5");
let count = 1;


tipAmount1.onclick = () => {
 
    if (count == 0) {

        tipAmount1.style.backgroundColor = "hsl(183, 100%, 15%)";
        count = 1;
    }
    else {
        tipAmount1.style.backgroundColor = "hsl(172, 67%, 45%)";
        count = 0;
    }
    
    
};
tipAmount2.addEventListener('click', () => {

    if (count == 0) {

        tipAmount2.style.backgroundColor = "hsl(183, 100%, 15%)";
        count = 1;
    }
    else {
        tipAmount2.style.backgroundColor = "hsl(172, 67%, 45%)";
        count = 0;
    }
    const tAmount = parseInt(tipAmount2.innerText);
});
tipAmount3.addEventListener('click', () => {

    if (count == 0) {

        tipAmount3.style.backgroundColor = "hsl(183, 100%, 15%)";
        count = 1;
    }
    else {
        tipAmount3.style.backgroundColor = "hsl(172, 67%, 45%)";
        count = 0;
    }
    const tAmount = parseInt(tipAmount3.innerText);
});
tipAmount4.addEventListener('click', () => {

    if (count == 0) {

        tipAmount4.style.backgroundColor = "hsl(183, 100%, 15%)";
        count = 1;
    }
    else {
        tipAmount4.style.backgroundColor = "hsl(172, 67%, 45%)";
        count = 0;
    }
    const tAmount = parseInt(tipAmount4.innerText);
});
tipAmount5.addEventListener('click', () => {

    if (count == 0) {

        tipAmount5.style.backgroundColor = "hsl(183, 100%, 15%)";
        count = 1;
    }
    else {
        tipAmount5.style.backgroundColor = "hsl(172, 67%, 45%)";
        count = 0;
    }
    const tAmount = parseInt(tipAmount5.innerText);
});



