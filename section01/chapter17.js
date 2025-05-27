console.log("chapter17 - 배열");

//배열 array란?
//여러 개의 값을 순차적으로 담을 수 있는 자료형

//1. 배열 생성
//1-1. 배열 생성자
let arrA = new Array();
//1-2. 배열 리터럴
let arrB = [];

let arrC = [1, 2, 3, 4, "hello", true, null, undefined, () => {}, {}, []];
//무슨 타입이든 구분없이 다 넣을 수 있다.

//2. 배열 요소 접근
let item1 = arrC[0]; //인덱스로 값에 접근할 수 있다.
let item2 = arrC[4];

console.log(item1, item2);

arrC[0] = "안녕"; //값 수정
