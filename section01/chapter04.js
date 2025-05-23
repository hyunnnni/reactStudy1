console.log("chapter04 - 변수와 네이밍 규칙");

//1. 변수
let name1;
console.log(name1); //undifined로 출력됨됨

let age = 26; //변수 선언과 초기화
console.log(age);

age = 30;
console.log(age); //값이 바뀐채 출력

//2. 상수
const birth = "0503"; //초기화가 필수이며 값을 이후에 변경할 수 없다

//3. 변수 명명규칙 (네이밍 규칙)
//3-1. $,_ 를 제외한 특수문자는 사용금지
let $_name; //가능

//3-2. 숫자로 시작할 순 없다
let na1me1; //중간이나 끝에는 사용이 가능

//3-3. 예약어를 사용할 수 없다. let, const, return, if, name 등

//4. 변수 명명 가이드
//다른사람들도 알아볼 수 있는 명확한 변수명을 사용하는 것이 좋다
//아래처럼 간단한 건 지양하기
let a = 1;
let b = 2;
let c = a - b;

console.log(c);
