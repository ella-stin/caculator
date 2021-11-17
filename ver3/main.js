let inputNum1 = prompt('숫자1', '100');

/*switch(true) {
	case isNaN(inputNum1):
		alert('숫자를 입력해 주세요');
		break;
}*/

let inputNum2 = prompt('숫자2', '200');
if(isNaN(inputNum1)) {
alert('숫자1에 숫자를 입력해 주세요');
} else if(isNaN(inputNum2)) {
alert('숫자2에 숫자를 입력해 주세요');
}

let a = Number(inputNum1);
let b = Number(inputNum2);

let op = prompt('어떤 사칙연산을 원하십니까?');


let plusV = a + b;
let minusV = a - b;
let timesV = a * b;
let divideV = a / b;


   while(   op != '+' && op != '-' && op != '*' && op !='/'){
        let again = prompt ( '사용할 수 없는 연산자입니다.' );	
		if(again == '+' ||  again == '-' ||  again == '*' ||  again == '/'){
			switch(again) {
				case '+':
					alert(plusV);
					break;
				case '-':
					alert(minusV);
					break;
				case '*':
					alert(timesV);
					break;
				case '/':
					alert(divideV);
					break;
				/*default:
					prompt('다시 도전!');*/
				
			}

		break;}
	
	}

	switch(op) {
				case '+':
					alert(plusV);
					break;
				case '-':
					alert(minusV);
					break;
				case '*':
					alert(timesV);
					break;
				case '/':
					alert(divideV);
					break;
			}