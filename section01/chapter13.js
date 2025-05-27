console.log("chapter13 - 콜백 함수");

// 콜백 함수 : 자신이 아닌 다른 함수에 인수로서 전달된 함수를 의미함.
// main함수가 원하는 타이밍에 실행할 수 있다.

function main(value) {
  //2. sub함수가 매개변수 value에 대입된다.
  value(); //3. value에 대입된 sub 함수를 호출한다.
}

function sub() {
  //콜백함수
  console.log("I'm sub");
}

main(sub); //1. sub를 main의 매개 변수에 값으로 넣어준다.

//함수 표현식이나 화살표 함수로 인수를 넣어도 된다
main(function sub2() {
  console.log("sub2");
});

main(function () {
  //익명 함수
  console.log("sub3");
});

main(() => {
  //화살표 함수
  console.log("sub4");
});

//예제 콜백함수의 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, function (i) {
  console.log(i);
});

repeat(5, function (i) {
  console.log(i * 2);
});
