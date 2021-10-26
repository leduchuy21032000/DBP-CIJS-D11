class Box {
    divElement
    constructor() {
        this.divElement = document.createElement('div')
        this.divElement.classList.add("Box")
        this.divElement.addEventListener("click",(event) => {
            // const colors = ["red", "blue", "yellow"]
            // const randomIndex = Math.ceil((Math.random) * colors.length)
            this.changeColor(this.randomColor())
        })
    }
    html() {
        return this.divElement
    }
    randomNumber(to) {
        return parseInt(Math.random()*to)
    }
    randomColor() {
        let red = this.randomNumber(255)
        let green = this.randomNumber()
        let blue = this.randomNumber()

        return `rgb(${red}, ${green}, ${blue})`
    }
    changeColor(newColor) {
        this.divElement.style.background = newColor
    }
}

export {Box}