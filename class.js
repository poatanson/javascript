class Person {
    // 생성자 메서드
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 메서드
    greet() {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고 ${this.age}살입니다.`);
    }

    // 정적(Static) 메서드
    static info() {
        console.log("이 클래스는 사람의 정보를 나타냅니다.");
    }
}