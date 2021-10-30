class Box {
    div = null
    constructor() {
        const div = document.createElement("div")
        div.classList.add("box")
        div.addEventListener("click", this.handlerClick)
        this.div = div
    }

    handlerClick = () => {
        let color = this.div.style.background
        // console.log(this.div.style.background)
        this.div.dispatchEvent(new CustomEvent("select", {data:{color: "some color"}}))
    }

    html() {
        return this.div
    }
    setColor(color) {
        this.div.style.background = color
    }
}

export {Box}