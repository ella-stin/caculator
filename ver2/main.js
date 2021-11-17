let inputNum1 = prompt('NUM1');
let inputNum2 = prompt('NUM2');
let op = prompt('What do you want?');

let a = Number(inputNum1);
let b = Number(inputNum2);

let plusV = a + b;
let minusV = a - b;
let timesV = a * b;
let divideV = a / b;

if(op == '+' || op == '더하기') {
if(isNaN(plusV)) {
alert('숫자를 입력하세요!');
} else {
alert(plusV);
}} else if (op == '-' || op == '빼기') {
if(isNaN(minusV)) {
alert('숫자를 입력하세요!');
} else {
alert(minusV);
}} else if (op == '*' || op == '곱하기'|| op == 'x') {
if(isNaN(timesV)) {
alert('숫자를 입력하세요!');
} else {
alert(timesV);
}} else if (op == '/' || op == '나누기') {
if(isNaN(divideV)) {
alert('숫자를 입력하세요!');
} else {
alert(divideV);
}}