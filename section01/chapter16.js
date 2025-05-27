console.log("chapter16 - 객체2");

//상수 객체

const animal = {
  type: "고양이",
  name: "쏘냐",
  color: "턱시도",
};

// animal = { 아예 다른 값을 넣는 건 안된다다
//     a:1
// };
animal.age = 2; //추가
animal.name = "쏘냐귀여워"; //수정
delete animal.color; //삭제

console.log(animal);

//상수는 새로운 값을 할당하는 건 못하지만
//그냥 저장된 속성을 수정, 추가, 삭제는 가능하다.

//2. 메서드
//값이 함수인 속성을 말함

const person = {
  name: "김경현",
  sayHi: function () {
    //화살표, 익명 다 가능함함
    console.log("안녕");
  },
  sayBye() {
    //메서드 선언언
    console.log("잘가!");
  },
};

person.sayHi(); //호출 가능
person.sayBye();
person["sayBye"]();
