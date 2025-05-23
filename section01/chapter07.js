console.log("chapter07 - 연산자");

//1. 대입 연산자 : =
let var1 = 1; //값을 저장해주는 연산

//2. 산술 연산자 : 사칙연산과 나머지(모듈러)
let num1 = 1 + 1;
let num2 = 1 - 1;
let num3 = 1 * 1;
let num4 = 1 / 1;
let num5 = 1 % 1; //나머지 = 모듈러라고도 부른다.

//3. 복합 대입 연산자 : 산술 + 대입
let num6 = 10;
num6 += 20; //대입에 바로 산술을 사용해 간략하게 줄인 것
num6 -= 20;
num6 *= 20;
num6 /= 20;
num6 %= 20;

//4. 증감 연산자 : +,- 가능능
let num7 = 10;
console.log(num7++); //10 후위 연산산
//증감감 연산자가 변수 뒤에 위치하게 된다면 해당 라인이 실행된 후 적용된다.
console.log(++num7); //12 전위 연산

//5. 논리 연산자
let or = true || false; //or 연산자 : 둘 중 하나만 true라면 true이다.
let and = true && false; //and 연산자 : 두가지 모두 true여야 true이다.
let not = !true; //not 연산자 : 현재 값의 반대 값을 나타낸다.

//6. 비교 연산자
let comp1 = 1 === 2; //같은가
//=== 3개는 타입까지 비교하는 것(주로 사용함)
//== 2개는 타입은 비교하지 않는다
let comp2 = 1 !== 2; //다른가
console.log(comp1, comp2); //false true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 1;
let comp6 = 2 <= 1;
console.log(comp3, comp4, comp5, comp6); //true false true false
