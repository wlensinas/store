// const myName = 'jorge';

// const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  // Primera forma de declarar
  // private age;
  // private name; //por defecto le asigna public ts.

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  // segunda forma de declarar sin tener que poner las propiedades
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `my name is ${this.name} and my age ${this.age}`;
  }
}

const jorge = new Persona(30, 'Jorge');
jorge.getSummary();
