console.log("chapter14 - 스코프");

//변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
//전역변수 그런 개념

//1. 전역 스코프 : 전체 영역에서 접근이 가능
let a = 1;

function funcA() {
  console.log(a); //문제가 생기지 않는다.
}

//------------------------------------------------------------------
//2. 지역 스코프 : 특정 영역에서만 접근이 가능
//function, if, for 등 전부 해당
function funcB() {
  let b = 2; //funcB에서만 접근이 가능함
}

//console.log(b); //not defined
//-------------------------------------------------------------------

function funcC() {
  function funcD() {
    console.log("funcD"); //함수 안 함수 선언언에서만 지역 스코프가 적용
  }
}

//funcD(); //not defined

if (true) {
  function funcE() {
    console.log("funcE");
  }
}

funcE(); //for, if문에서의 함수 선언은 지역 스코프 적용이 되지 않는다.
