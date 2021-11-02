/**
class Car {
    // Định nghĩa các property của 1 class
    name = null
    brand = null
    price = null

    constructor(name, brand, price) {
        this.name = name
        this.brand = brand
        this.price = price
        // 
    }
    // intance method
    method() {
        // object sẽ được tạo ra bằng từ khóa new
        // console.log(this)
        console.log(Car.SIZE)
    }
    func() {

    }
    run() {

    }
    // class method, property
    static SIZE = 4
    static someFunction() {
        // Cái bản thân class
        console.log(this)
        console.log(this.SIZE)
    }
    static fromUnix(unixTime) {

    }
    static fromDateString(dateString) {
        // 
        let car = new Car(a,b,c)
        return car
    }

}

// Static
// Kế thừa và đa hình
const car = new Car()
car.method()
console.log(car)
// car.someFunction() // Không được

// Gom được nhiều thuộc tính và hành động liên quan tới nhau để dễ quản lý
Car.someFunction()

const date = new Date() // unix time 1 con số rất lớn từ 1/1/1970 -> hiện đại, đã trải qua bao nhiêu giây
// date string: 13 Nov 2021
// date-time string 21:00 13 Nov 2021

*/

import { Car } from "./modules/Car.js";
import { Lamborghini } from "./modules/Lamborghini.js";

// const car = new Car("Civic", "Honda", 1, "Huy")
// car.run()
// car.stop()

// const lambo = new Lamborghini("Aventador", 10, "Huy")
// lambo.run()
// lambo.stop()

