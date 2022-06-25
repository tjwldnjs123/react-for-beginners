function hello(props) {
  alert(props + "님 안녕하세요");
}
// undefined

hello("지원");
// undefined
hello();
// undefined
function hello2(name) {
  return name + "님 안녕하세요";
}
// undefined
hello2("지원");
// '지원님 안녕하세요'
console.log("지원님 안녕하세요");
// VM1641:1 지원님 안녕하세요
// undefined

// const classmates = ["김환희", "여운화", "조현우", "현민철"];

// function newStudent(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i] + "님 반갑습니다.";
//   }
// }
// 김환희님 반갑습니다.

const classmates = ["김환희", "여운화", "조현우", "현민철"];
// undefined
function newStudent(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "님 반갑습니다.");
  }
}
// undefined
newStudent(classmates);
// VM2902:3 김환희님 반갑습니다.
// VM2902:3 여운화님 반갑습니다.
// VM2902:3 조현우님 반갑습니다.
// VM2902:3 현민철님 반갑습니다.
