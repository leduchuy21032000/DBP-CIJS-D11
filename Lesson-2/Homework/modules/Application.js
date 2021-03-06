import { Timer } from "./Timer.js"
import { Boxes } from "./Boxes.js"

class Application {
    timer = null
    boxes = null
    div = null
    trueColor = null
    falseColor = null
    constructor() {
        const main = document.createElement("div")
        main.id = "main"
        document.getElementById("body").insertAdjacentElement("afterbegin", main)
        main.addEventListener("lose", this.handlerLose)
        main.addEventListener("selectColor", this.handlerSelect)
        this.main = main

        this.timer = new Timer(5)
        this.boxes = new Boxes(9)
    }

    handlerLose = () => {
        this.timer.stop()
        alert("You lose!")
    }

    handlerWin = () => {
            this.timer.reset()
            this.newColor()
    }

    newColor = () => {
        // Random ra màu
        let red = this.randomNumber(255)
        let green = this.randomNumber(255)
        let blue = this.randomNumber(255)
        this.trueColor = `rgb(${red}, ${green}, ${blue})`
        this.falseColor = `rgba(${red}, ${green}, ${blue}, ${0.1})`
    }

    handlerSelect = (event) => {
        // Kiểm tra
        let color = event.detail.color || null
        if (color == this.trueColor) {
            this.main.dispatchEvent("gameLose")
        }
        else {
            this.main.dispatchEvent("gameWin")
        }
    }

    init() {
        this.main.insertAdjacentElement("beforeend", this.timer.html())
        this.main.insertAdjacentElement("beforeend", this.boxes.html())
        this.newColor()
        
        this.boxes.initColor(this.trueColor, this.falseColor)
        console.log("Application is running")
        // this.timer.render()
        this.timer.start()
    }
}

export {Application}