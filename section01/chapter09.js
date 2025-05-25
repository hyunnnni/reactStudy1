console.log("chapter09 - 조건문");

//조건문이란?
//특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
//if, switch

//1. if
let num = 10;
if ((num) => 10) {
  //해당 조건이 true라면 {}안의 코드가 실행된다.
  console.log("num은 10 이상입니다.");
} else if ((num) => 5) {
  //위의 조건 외 다른 조건을 사용하고 싶을 때
  console.log("num은 5 이상입니다.");
} else {
  //위의 조건 외 다른 나머지일 때 실행되면 좋겠는 코드
  console.log("num은 5 미만입니다.");
}

//2. switch
//if와 기능 자체는 동일
//다수의 조건을 처리 시 if보다 직관적

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break; //switch는 해당 case에 해당되면 아래 코드는 모두 실행하기 때문에
    //breack를 사용해야 원하는 코드까지만 실행이 된다다
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  default: {
    //위의 조건 외 다른 값일 때 일괄처리
    console.log("해당 동물은 모릅니다.");
  }
}
