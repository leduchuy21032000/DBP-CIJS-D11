// let a = 1
// console.log(a)

// let another_person = JSON.parse(JSON.stringify(person))

// let i = 20
// switch (i) {
//     case 10:
//         console.log("hello")
//         break
//     case 20:
//         console.log("world")
//         break
// }
let a = [1,2,3,4,5]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }

// for (let element of a) {     // for of
//     console.log(element)
// }

let obj = {
    key: "some value",
    key2: "some value2",
}
for (let key in obj) {          // for in để duyệt key trong obj
    console.log(obj[key])
}