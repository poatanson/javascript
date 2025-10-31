var numbers = [ 1, 2, 3, 4, 5 ];
var twice = numbers.map(function(value, index) { // map 함수를 통해서 배열의 요소에 2를 곱한 새로운 배열을 생성
    return value * 2;
});

console.log(twice);