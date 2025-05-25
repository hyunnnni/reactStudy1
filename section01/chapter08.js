console.log("chapter08 - 연산자2");

//1. null 병합 연산자 : ??
//존재하는 값을 추려내는 기능
//null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

//??가 null 병합 연산자
// 이 두가지 변수 중 null이나 undefined가 아닌 값을 찾아 var4에 넣어줌
let var4 = var1 ?? var2;
console.log(var4);
let var5 = var1 ?? var3;
console.log(var5);

//둘 다 null, undefined가 아니라면 먼저 적은 변수의 값을 대입한다.
let var6 = var2 ?? var3;
console.log(var6);

//userName이 있다면 그대로 userName를 사용하고 아니라면 nickName을 써라
//라는 상황에서 사용
let userName = "김경현";
let userNickName = "kim";
let displayName = userName ?? userNickName;

//2. typeof 연산자
//값의 타입을 문자열로 반환하는 연산자이다.

let var7 = 1;
var7 = "hello"; //자바스크립트는 타입이 고정적이지 않다
let type = typeof var7;
console.log(type); //그래서 타입을 확인 시 주로 사용됨

//3. 삼항 연산자
//항을 3개 사용하는 연산자
//조건식을 이용해 값을 다르게 반환

let var8 = 10;
//var8이 짝수라면 짝수를 저장 홀수라면 홀수
let result = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(result);
