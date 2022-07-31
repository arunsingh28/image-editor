class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
    
}

class Addition {
    constructor(no1, no2) {
        this.no1 = no1;
        this.no2 = no2
    }
    // gutter
    get Add() {
        return this.no1 + this.no2
    }
}

const Arun = new Person('Arun', 'Singh')


const sum1 = new Addition(10, 32)


console.log(Arun.lastName)

console.log('sum is :', sum1.Add)