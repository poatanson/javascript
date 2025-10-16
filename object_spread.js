let user = { name: 'Kim', city: 'Seoul' };

user = { ...user, age: 28 };
console.log(user);

user = { ...user, name: 'John', age: 30};
console.log(user);