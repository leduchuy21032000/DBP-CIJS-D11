// import { Application } from "./modules/Application.js"

// const app = new Application()

// app.init()
const element = document.getElementById("btn")

// element.getElementById("btn").addEventListener("click", () => {

// })
const customEvent = new CustomEvent("custom", {bubbles: true})
element.dispatchEvent(customEvent)

document.getElementById("div").addEventListener("custom", () => {
    console.log("Event custome was triggered")
})