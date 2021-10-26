// import {addition, subtraction} from "./modules/math.js"
// const result = addition(1,2)
// let r = subtraction(3,4)

// Programming Style -> code dễ hơn, dễ bảo quản, duy trì
// Mọi thứ đều được cấu tạo tù Class - Lớp và Object - Đối tượng (không phải object trong JS)

function createPerson(name, job) {
    return {
        // Property
        name: name,
        job: job,
        // Method | Behavior
        run() {
            console.log("Running")
        }
    }
}

let guy = createPerson("Quang", "Student")

const person = {
    // Property
    name: "Son",
    job: "Mindx",
    // Method | Behavior
    run() {
        console.log("Running")
    }
}

const person2 = {
    name: "Dung",
    job: "Mindx",
    run() {
        console.log("Dung is running")
    }
}

// person.run()
// person2.run()

// 4 tính chất
// Đóng gói | Trừu tượng | Kế thừa | Đa hình

class Car {
    // Property | Attribute
    name = null
    brand = null
    price = null
    engine = null

    constructor(name, brand, price, engine) {
        this.name = name    // this - refer to the instance of the class
        this.brand = brand
        this.price = price
        this.engine = engine
    }

    run() {
        console.log(`The car ${this.name} is running`)
    }
}

const myCar = new Car("Aventador", "Lamborghini", 1, "V8")  // myCar là một instance




