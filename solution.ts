function formatValue(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return !input;
}

function getLength(data: string | any[]): number {
  if (typeof data === "string") {
    return data.length;
  }
  if (Array.isArray(data)) {
    return data.length;
  }
  return 0;
}

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);

