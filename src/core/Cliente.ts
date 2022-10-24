export default class Client {
    private id: string;
    private name: string;
    private age: number;

    constructor(name: string, age: number, id: string = null) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    static empty() {
        return new Client('', 0);
    }
    get userId(){
        return this.id;
    }

    get userAge(){
        return this.age;
    }

    get userName() {
        return this.name;
    }
}