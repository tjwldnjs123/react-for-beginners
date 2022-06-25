1 + 1;
// 2;
1 + "1";
// ("11");
10 + 9;
// 19;
10 + "9";
// ("109");
typeof "가";
// ("string");
typeof 1;
// ("number");
typeof true;
// ("boolean");
typeof {};
// ("object");
typeof [];
// ("object");
Array.isArray([]);
// true;
"A" === "A";
// true;
"1" === 1;
// false;
"1" == 1;
// true;
true && false;
// false;
true && true;
// true;
true && !false;
// true;
true || false;
// true;
false || false;
// false;

if ("A" === "A") {
  console.log("정답");
} else {
  console.log("땡");
}
// VM1162:2 정답
// undefined
if (false) {
  console.log("정답");
} else {
  console.log("땡");
}
// VM1215:4 땡
// undefined
if (true) {
  console.log("정답");
} else {
  console.log("땡");
}
// VM1246:2 정답
// undefined
if (0) {
  console.log("정답");
} else {
  console.log("땡");
}
// VM1270:4 땡
// undefined

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (8 <= profile.age && profile.age <= 19) {
  console.log("학생입니다.");
} else if (profile.age <= 7) {
  console.log("어린이입니다.");
}
//  학생입니다.

if (profile.age >= 20) {
  console.log("성인입니다.");
} else if (profile.age >= 8) {
  console.log("학생입니다.");
} else if (profile.age >= 0) {
  console.log("어린이입니다.");
} else {
  console.log("잘못 입력하셨습니다.");
}

//  학생입니다.
