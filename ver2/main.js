let inputNum1 = prompt('NUM1');
let inputNum2 = prompt('NUM2');
let op = prompt('What do you want?');

let a = Number(inputNum1);
let b = Number(inputNum2);

if(op == '+' || op == '더하기') {
alert(a + b);
} else if (op == '-' || op == '빼기') {
alert(a - b);
} else if (op == '*'|| op == '곱하기'|| op == 'x') {
alert(a * b);
} else if (op =='/'|| op == '나누기') {
alert(a / b);
}
