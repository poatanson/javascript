let colors = ["red", "green", "blue"];

// 비구조화 할당
let [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); 
console.log(secondColor);
console.log(thirdColor);

// 주요 특징

// 일부 요소 무시: 쉼표(,)를 사용하여 건너뛰고 싶은 요소를 무시할 수 있습니다.
let numbers = [10, 20, 30, 40];
let [a, , c] = numbers; // 20은 건너뛰고 30을 c에 할당
console.log(a); 
console.log(c); 

// 나머지 요소(...Rest): 나머지 매개변수(...)를 사용하여 남은 요소들을 새로운 배열로 할당할 수 있습니다.
let names = ["Alice", "Bob", "Charlie", "David"];
let [main, ...rest] = names;
console.log(main); 
console.log(rest);

// 변수 값 교환: 비구조화 할당을 이용해 두 변수의 값을 임시 변수 없이 쉽게 교환할 수 있습니다.
let x = 1;
let y = 5;
[x, y] = [y, x];
console.log(x);
console.log(y);