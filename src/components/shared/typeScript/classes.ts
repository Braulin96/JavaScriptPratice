interface IPerson {
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    name: string;
    private age: number;
    // private age: number;
    constructor (id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;    
    }
    sayMyName(): string {
        return this.name 
    }
}

class Employee extends Person {
    constructor(id: number, name: string, age: number){
        super(id, name, age);
    }
    WhoAmI(){
        return this.name
    }
}

const felipe = new Person (2, 'Felipe', 21)
 