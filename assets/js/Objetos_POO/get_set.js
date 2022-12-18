// get: pegar    set: colocar

class Person {
  _age = 0;
  steps = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAsStep() {
    this.steps++;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    // retorna o valor que vc quer
    return this._age;
  }

  set age(x) {
    if (typeof x == "number") {
      this._age = x;
    }
  }
}

let p1 = new Person("joão", "Pereira");
let p2 = new Person("Maria", "Gloria");
let p3 = new Person("Pedro", "Silva");

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos.`);
