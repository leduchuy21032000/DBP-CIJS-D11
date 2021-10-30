import { Box } from "./Box.js"

class Boxes {
    boxes = null
    boxesArray = []
    constructor(amount) {
        this.amout = amount
        const boxes = document.createElement("div")
        boxes.classList.add("boxes")
        for (let i = 0; i < amount; i++) {
            const box = new Box()
            boxes.insertAdjacentElement("beforeend", box.html())
            this.boxesArray.push(box)
        }
        this.boxes = boxes
    }

    setColor(trueColor, falseColor) {
        // Random ngẫu nhiên 1 thằng con cho false color. Tất cả những thứ còn lại thì true color
        const random = parseInt(Math.random()*this.amount)
        for (let i = 0; i < this.amount; i++) {
            if (i == random) {
                this.boxesArray[i].setColor(falseColor)
            }
            else {
                this.boxesArray[i].setColor(trueColor)
            }
        }        

    }
    html() {
        return this.boxes
    }
}

export {Boxes}
