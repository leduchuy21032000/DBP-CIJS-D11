import { Car } from "./Car.js";

class Lamborghini extends Car {
    constructor(name, price, owner) {
        //super() // đang gọi constructor của Base class - Class cha (Car)
        //super.stop() // dùng super. thay vì this.
        // console.log(super.NO_SEATS) -> super chỉ refer tới instance
        super(name, "Lamborghini", price, owner)
        //super(name, null, price, owner)
        //this.brand = "Lamborghini"
    }

    // Khai báo mới 1 method
    open() {
        console.log("The lamborghini car is open by Scissor way")
    }

    // override
    run() {
        
    }
}

export { Lamborghini }