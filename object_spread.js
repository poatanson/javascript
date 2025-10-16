let user = { name: 'Kim', city: 'Seoul' };

user = { ...user, age: 28 };
console.log(user); // { name: 'Kim', city: 'Seoul', age: 28 }

user = { ...user, name: 'John', age: 30};
console.log(user); // { name: 'John', city: 'Seoul', age: 30 }