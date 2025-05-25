console.log("chapter11 - 함수");

//생산성을 위해 함수를 사용
//중복되는 코드 유지보수가 용이하기 위해

//1. 함수 선언 function  함수 = 메소드드
function greeting() {
  //()은 파라미터 (= 매개변수) 값을 받아오거나 받지 않거나 할 수 있다.
  //함수를 선언하는 과정
  //해당 함수가 호출될 때 실행되길 원하는 코드를 작성
  console.log("안녕하세요"); //호출 전까진 해당 코드는 실행되지 않음
}

//2. 함수 호출
greeting();

//2-1. 직사각형의 넓이를 구하는 함수
//실행만 진행됨으로 해당 함수는 자바로 void
function getArea(width, height) {
  let area = width * height;
  console.log(`해당 직사각형의 넓이는 ${area}입니다.`);
}

let width = 10;
let height = 20;

getArea(width, height); //보내는 값은 인수
getArea(30, 100);

//2-2. return 키워드를 사용하여 return 함수로 사용용
function getAreaReturn(width, height) {
  let area = width * height;
  return area; //해당 함수를 사용하면 area를 반환함
}

let areaResult = getAreaReturn(width, height);
console.log(`해당 직사각형의 넓이 반환값은 ${areaResult}입니다.`);

//2-3. 중첩 함수
function getAreaAnother(width, height) {
  let area = width * height;
  function another() {
    //함수 안에 함수 선언을 하고 호출하는 것
    //해당 중첩 함수는 상위 함수 안에서만 호출이 가능하다 밖에서는 호출 안됨
    //Uncaught ReferenceError: another is not defined at : 못찾는다는 에러가 생김김
    console.log("another");
  }
  another();
  return area; //해당 함수를 사용하면 area를 반환함
}

let anotherRes = getAreaAnother(width, height);
console.log(anotherRes);

//2-4. 호이스팅이란 기능
//함수 선언을 먼저 하지 않고 호출 후 선언해도 문제가 되지 않는다
//내부적으로 끌어올려 실행을 해 오류가 생기지 않음
//유연하다

hoisting();

function hoisting() {
  console.log("순서가 상관없다! hoisting");
}
