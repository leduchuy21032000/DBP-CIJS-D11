// Encapsulation - Đóng gói
// Abstraction - Trừu tượng hóa
// Inheritance - Kế thừa -> Hôm nay học
// Polymerization - Đa hình -> Hôm nay học

class Car {
    static NO_SEATS = 4
    // Định nghĩa các property của 1 class
    name = null
    brand = null
    price = null
    owner = null

    constructor(name, brand, price, owner) {
        this.name = name
        this.brand = brand
        this.price = price
        this.owner = owner
    }
    run(distance, destination) {
        console.log("The car is running")
    }
    start() {
        console.log("The car was started")
    }
    stop() {
        console.log("The car was stopped")
    }
    repair() {
        console.log("The car is repairing")
    }
    showInfo() {
        console.log(`${this.brand} ${this.name} ${this.price} ${this.owner}`)
    }
}

export { Car }




