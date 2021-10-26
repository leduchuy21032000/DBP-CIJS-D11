import {Box} from "./modules/Box.js"

const NoBox = 4
const boxex = []
for (let i = 0; i < NoBox; i++) {
    boxes.push(new Box)
}

const app = document.getElementById("app")

for (let box of boxes) {
    app.insertAdjacentElement("beforeend", box.html())
}