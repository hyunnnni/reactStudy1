console.log("chapter15 - 객체1");

//객체란?
//원시 타입이 아닌 객체 타입의 자료형
//여러가지 값을 동시에 저장할 수 있는 자료형을 의미
//object - Array, Function, RegexExp(리젝스)

//1. 객체 생성 : 생성 방식은 2가지지
//1-1. 객체 생성자
let obj1 = new Object();
//1-2. 객체 리터럴 : 대부분 사용
let obj2 = {};

//---------------------------------------------------
//2. 객체 속성 = property
let person = {
  //객체 안 정보값들은 객체 속성이라고 함
  name: "김경현", //property = key : value로 이루어짐
  age: 26, //property 개수, 타입 제한이 없다. value로 함수(이럴경우 메서드라고 부름름), 객체 다 상관없다.
  hobby: "방 꾸미기",
  10: 20, //숫자도 가능하다
  "like cat": true, //띄어쓰기를 원할 시 key는 ""를 사용해준다.
};

//---------------------------------------------------
//3. 객체 속성을 다루는 방법
//3-1. 특정 속성에 접근법
//3-1-1. 점 표기법
let name = person.name; //.을 찍어 접근 후 값을 뽑아온다.
//존재하지 않는 속성을 적는다면 undefined
console.log(name);

//3-1-2. 괄호 표기법
let strAge = "age";
let age = person["age"]; //"키키" 필수/ 아니라면 변수로 인식
let age2 = person[strAge]; // 이건 가능

//3-2. 새로운 속성을 추가, 수정하는 방법
person.hobby = "다이어리꾸미기"; //value 값을 바꾸거나
person["job"] = "백수"; //속성 추가가 가능하다

//3-3. 속성을 삭제하는 방법
delete person.job; //해당 키로 표기하거나 괄호 표기로 삭제 가능하다
delete person["10"];
console.log(person);

//3-4. 속성 존재 유무 확인 방법 : in 연산자
let result = "name" in person; //해당 속성이 포함되어 있다면 true를 반환
console.log(result);
