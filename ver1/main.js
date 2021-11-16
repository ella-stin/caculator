const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDivide = document.getElementById("btn-divide");
const btnPower = document.getElementById("btn-power");
const result = document.getElementById("result");

const num1 = document.querySelector("#num1 input");
const num2 = document.querySelector("#num2 input");


const caculator = {
    plus: function(a,b) {
        a = Number(num1.value);
        b = Number(num2.value);  
       result.innerText = `The result is ${a+b}`;
    },
    minus: function(a,b) {
        a = Number(num1.value);
        b = Number(num2.value);  
       result.innerText = `The result is ${a-b}`;
    },
    times: function(a,b) {
        a = Number(num1.value);
        b = Number(num2.value);  
       result.innerText = `The result is ${a*b}`;
    },
    divide: function(a,b) {
        a = Number(num1.value);
        b = Number(num2.value);  
       result.innerText = `The result is ${a/b}`;
    },
    power: function(a,b) {
        a = Number(num1.value);
        b = Number(num2.value);  
       result.innerText = `The result is ${a**b}`;
    }
}

btnPlus.addEventListener("click", caculator.plus);
btnMinus.addEventListener("click", caculator.minus);
btnTimes.addEventListener("click", caculator.times);
btnDivide.addEventListener("click", caculator.divide);
btnPower.addEventListener("click", caculator.power);

