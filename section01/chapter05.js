console.log("chapter05 - 자료형(원시타입)");

//자료형 datatype
//1. 원시타입(기본형형) - Number, String, Boolean, Null, Undefined
//2. 객체타입 - object - Array, Function, RegexExp(리젝스)

//1. Number 모든 숫자타입을 포함한다
//정수, 실수, 음수, 무한대(Infinity), NaN(Nat a Number)
let num1 = 26;
let num2 = 2.6;
let num3 = -26;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
//자바와 다르게 모든 숫자타입이 포함되어 있으니 실수, 정수 가리지 않고 맞춰서 계산된다.

let inf = Infinity; //양수의 무한대
let mInf = -Infinity; //음수의 무한대

let nan = NaN;
//Not a Number 수치 연산이 실패되었을 때 결과값으로 사용되어 에러가 나지 않게 한다.

console.log(1 * "hello"); //NaN

//2. String 문자
let name1 = "김경현"; //꼭 '',""를 사용해서 값을 넣어야 한다.
let myLocation = "일산";
let introduce = name1 + myLocation;
console.log(introduce);

//템플릿 리터럴 문법 : 자주 이용됨됨
let introduceText = `${name1}은 ${myLocation}에 거주합니다`;
console.log(introduceText);
//백팁으로 문자열을 만들면 달러사인과 중괄호를 통해 변수를 문자열에 동적으로 사용가능

//3. Boolean
let isSwithOn = true;
let isEmpty = false;

//4. Null : 아무것도 없다
let empty = null; //개발자가 임시로 값이 없는걸 표현할 때 사용

//5. Undefined
let none; //초기화를 안했을 때, 존재하지 않은 걸 표현에 쓰임
console.log(none);
