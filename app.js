const bill = document.querySelector(".values1");
const person = document.querySelector(".values2");
const custom = document.querySelector(".Custom");
let tipAmount = document.querySelectorAll(".tips");
const msg = document.querySelector(".error-msg")
let result = document.querySelectorAll(".result");
let reset=document.querySelector(".reset");
let billValue = 0.0;
let noOfPerson = 1;
let customTip = 0;
let tipValue = 0.15;
bill.addEventListener('input', () => {
    
    billValue = parseFloat(bill.value);
    removeReset();
    calculate();
})
person.addEventListener('input', () => {
    removeReset();
    noOfPerson = parseInt(person.value);
    if (noOfPerson == 0) {
        person.classList.add('error-msg-class');
        msg.classList.remove('no-display');
    }
    else {
        person.classList.remove('error-msg-class');
        msg.classList.add('no-display');
    }
    calculate();
})
custom.addEventListener('input', () => {
    removeReset();
    customTip = parseInt(custom.value);
    tipValue = parseFloat(customTip) / 100;
    tipAmount.forEach(btn => {
        btn.classList.remove('btn-active');
    })
    calculate();
})
tipAmount.forEach(btn => {
    btn.addEventListener('click', btnTransform);
});
function btnTransform(eve) {
   
    tipAmount.forEach(btn => {
        btn.classList.remove('btn-active');
        if (eve.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
       
        calculate();
    })

}
const calculate=function () {
    if (noOfPerson >= 1) {
        let tipPerPerson = billValue * tipValue/ noOfPerson;
        let totalPerPerson = billValue * (tipValue + 1) / noOfPerson;
        result[0].innerHTML = '$'+tipPerPerson.toFixed(2);
        result[1].innerHTML = '$'+totalPerPerson.toFixed(2);

    }
}
reset.addEventListener('click',()=>{
    reset.classList.add('reset-button');
    bill.value="";
    person.value="";
    custom.value="";
      billValue = 0.0;
       noOfPerson = 1;
       customTip = 0;
      tipValue = 0.15;
      tipAmount[2].click();
      
})
function removeReset(){
    reset.classList.remove('reset-button');
}































// let tipAmount2 = document.querySelector("#A2");
// let tipAmount3 = document.querySelector("#A3");
// let tipAmount4 = document.querySelector("#A4");
// let tipAmount5 = document.querySelector("#A5");
// let count = 1;


// tipAmount1.onclick = () => {

//     if (count == 0) {

//         tipAmount1.style.backgroundColor = "hsl(183, 100%, 15%)";
//         count = 1;
//     }
//     else {
//         tipAmount1.style.backgroundColor = "hsl(172, 67%, 45%)";
//         count = 0;
//     }


// };
// tipAmount2.addEventListener('click', () => {

//     if (count == 0) {

//         tipAmount2.style.backgroundColor = "hsl(183, 100%, 15%)";
//         count = 1;
//     }
//     else {
//         tipAmount2.style.backgroundColor = "hsl(172, 67%, 45%)";
//         count = 0;
//     }
//     const tAmount = parseInt(tipAmount2.innerText);
// });
// tipAmount3.addEventListener('click', () => {

//     if (count == 0) {

//         tipAmount3.style.backgroundColor = "hsl(183, 100%, 15%)";
//         count = 1;
//     }
//     else {
//         tipAmount3.style.backgroundColor = "hsl(172, 67%, 45%)";
//         count = 0;
//     }
//     const tAmount = parseInt(tipAmount3.innerText);
// });
// tipAmount4.addEventListener('click', () => {

//     if (count == 0) {

//         tipAmount4.style.backgroundColor = "hsl(183, 100%, 15%)";
//         count = 1;
//     }
//     else {
//         tipAmount4.style.backgroundColor = "hsl(172, 67%, 45%)";
//         count = 0;
//     }
//     const tAmount = parseInt(tipAmount4.innerText);
// });
// tipAmount5.addEventListener('click', () => {

//     if (count == 0) {

//         tipAmount5.style.backgroundColor = "hsl(183, 100%, 15%)";
//         count = 1;
//     }
//     else {
//         tipAmount5.style.backgroundColor = "hsl(172, 67%, 45%)";
//         count = 0;
//     }
//     const tAmount = parseInt(tipAmount5.innerText);
// });



