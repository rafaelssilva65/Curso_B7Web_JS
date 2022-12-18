class Person {

    age = 0;
    steps = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    takeAsStep() {
        this.steps++;
    }
}

let p1 = new Person("joão", 50);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

p1.takeAsStep();
p1.takeAsStep();
console.log(`Passo de ${p1.name}: ${p1.steps}`);
console.log(p1);

// get: pegar    set: colocar