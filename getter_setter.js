class Circle {
    constructor(radius) {
        this._radius = radius; // 실제 값을 저장하는 내부 속성 (관례적으로 _를 붙임)
    }

    // Getter: 속성을 읽을때 호출됨
    get area() {
        return Math.PI * this._radius ** 2;
    }

    // Setter: 속성에 값을 할당할 때 호출됨
    set radius (newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.error("반지름은 양수여야 합니다.");
        }
    }
}

const circle1 = new Circle(5);

console.log(circle1.area); // getter 호출

circle1.radius = 10; // setter 호출
console.log(circle1.area)

circle1.radius = -2; // Setter 호출: 반지름은 양수여야 합니다. (에러 메시지 출력)