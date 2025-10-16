let user = {
    name: "John",
    age: 30,
    city: "New York"
};

// 비구조화 할당 (속성 이름과 변수 이름이 같아야 함)
let { name, age } = user;

console.log(name); 
console.log(age);
console.log(city) // city 변수는 할당하지 않았으므로 에러

// 새로운 변수 이름 사용: 객체의 속성 이름과 다른 이름으로 변수를 만들고 싶을 때는 콜론(:)을 사용합니다.
let person = { nickname: "Jane", job: "Developer" };
let { nickname: userName, job: userJob } = person; // nickname 속성 값을 userName 변수에 할당

console.log(userName); // "Jane"
console.log(userJob);  // "Developer"

// 기본값 설정: 객체에 해당 속성이 없을 경우를 대비하여 기본값을 설정할 수 있습니다.
let product = { id: 101, price: 5000 };
// description 속성이 없으면 '설명 없음'을 기본값으로 사용
let { id, description = '설명 없음'} = product;

console.log(id); 
console.log(description);

//함수 매개변수: 함수에 객체를 전달할 때 가장 유용하게 사용되며, 필요한 속성만 깔끔하게 꺼내 쓸 수 있습니다.

function displayUser({ name, age }) {
    console.log(`이름: ${name}, 나이: ${age}`);
}

displayUser(user);