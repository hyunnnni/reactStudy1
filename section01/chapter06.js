console.log("chapter06 - 형 변환(type casting)");

//어떤 값의 타입을 다른 타입으로 변경하는 것
//묵시적 형 변환 : 자바스크립트 엔진이 형 변환을 해주는 것
let num = 10;
let str = "20";

const result = num + str; //덧셈 과정 중 String으로 자동 변환된 것
console.log(result); //1020

//명시적 형 변환 : 개발자가 직접 내장함수를 사용해 형 변환을 해주는 것

//1. 문자열 -> 숫자
//문자열에 숫자만 있는 경우 -> Number
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); //20

//문자열에 숫자 외 문자가 있는 경우 -> parseInt
//Number을 쓸 경우 오류가 난다
//그러나 숫자 전 문자가 있을 경우 형변환이 제대로 이뤄지지 않을 수도 있다.
let str2 = "10개";
let strToNum2 = parseInt(str2);
let strToNum3 = parseFloat(str2);
console.log(10 + strToNum2); //20
console.log(0.1 + strToNum3); //10.1

//2. 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다."); //20입니다.
let num2 = 10;
let numToStr2 = num2.toString();
console.log(numToStr1 + "입니다."); //10입니다.
