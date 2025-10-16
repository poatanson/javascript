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

// 클래스 상속
class Student extends Person {
    constructor(name, age, studentId) {
        super (name, age); // 부모 클래스의 constructor 호출 (필수)
        this.studentId = studentId;
    }

    // 메서드 오버라이딩 (재정의)
    greet() {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고 학생 번호는 ${this.studentId}입니다.`);
    }

    study() {
        console.log(`${this.name}학생이 공부 중입니다.`);
    }
}

const student1 = new Student("박민지", 20, "20231234");

student1.greet();
student1.study();