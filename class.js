class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} make a noise.`);
    }
}

// extend the animal class
class Dog extends Animal {
    constructor(name) {
        // inherit some properties from Animal class
        super(name)
    }
    speak() {
        console.log(`${this.name} barks.`)
    }
}

const d = new Dog('labra').speak()
