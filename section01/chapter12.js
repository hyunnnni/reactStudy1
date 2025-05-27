console.log("chapter12 - 함수 표현식과 화살표 함수");

//0. 기존 함수
function funcA() {
  console.log("funcA");
}

let varA = funcA; //함수를 ()없이 사용한다면 함수 자체를 변수에 저장할 수 있다.
console.log(varA);
//함수 내용 자체가 콘솔창에 뜨게 된다.
//자바 스크립트는 함수도 하나의 값으로 처리
varA(); //변수에 담으면 변수의 이름으로도 함수 호출이 가능하다

//1. 함수 표현식 : 값으로서 인식이 되기에 호이스팅에는 해당되지않는다.
//콜백 함수 개념에 유용하게 활용됨

// let varB = function funcB(){//바로 대입하면서 값으로서 함수 넣을 수 있다.
//     console.log("funcB");
// };//하지만 함수 선언은 아니기에 함수의 이름으로 호출은 불가하다.

let varB = function () {
  //그래서 생성할 때 함수명을 생략해도 된다 : 익명 함수
  console.log("funcB");
};

//2. 화살표 함수 : 함수를 이 전보다 더 간결하게 생성해주는 문법
let varC = () => {
  //2-1.기본 모양
  return 1;
};
console.log(varC());

let varD = () => 1; //2-2. 딱히 더 실행할 코드 없이 return만 있다면 생략가능
console.log(varD());

let varE = (value) => {
  //2-3. 받고 싶은 매개변수가 있다면 ()에 동일하게 받아준다.
  console.log(`value는 ${value}이다.`);
  return 1 + value;
};
console.log(varE(10));
