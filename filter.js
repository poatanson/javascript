var numbers = [ 1, 2, 3, 4, 5 ];

var even = numbers.filter((value, index) => {
    return value % 2 == 0;  // 짝수만 반환
});

console.log(even); // [2, 4]