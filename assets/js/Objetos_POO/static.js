class Person {
  static hands = 2; //Deixa a variavel estatica dentro de template,
  //o objeto so consome ela se vc chamar la no objeto.
  age = 0;

  constructor(name) {
    this.name = name;
  }

  static sayHi() {
    console.log(`Oi ${this.name}`);
  }
}

let p1 = new Person("Bonieky");

Person.sayHi();
