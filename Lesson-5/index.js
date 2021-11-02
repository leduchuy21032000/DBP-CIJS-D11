const btn = document.getElementById("btn")

function onClickHandle (thamSo) {
    console.log(thamSo)
    console.log("Click me!")
}

// btn.addEventListener("click", onClickHandle)    // onClickHandle là hàm call back. 
                                                // Không được ghi onClickHandle() vì khi đó sẽ truyền vào output của hàm onClickHandle() 
                                                // chứ không phải là truyền vào onClickHandle()

// price // identifier - định danh


// Function -> nên có định danh. () - toán tử: group || make a function call

// 3 cách khai báo hàm myFunc()
// function myFunc() {

// }

// const myFunc = function() {

// }

// const myFunc2 = () => {

// }

// let myf = myFunc2
// myFunc2()
// myf()


// Callback: 1) là 1 hàm. 2) Hàm được truyền vào hàm khác như là tham số.
// let a = 10
// a()
// myFunc(a())     // Sẽ thành công nếu a là 1 tham số và output của a là một hàm

// HOF - Higher Order Function
/**
 * My first higher order function
 * @param {*} greet String
 * @param {*} callback A function takes an argument
 */
// function myHOF(greet, callback) {
//     let value = 10
//     callback(value)
//     console.log(greet)
// }

// myHOF("Hello", (a) => {
//     console.log(`From callback with ${a}`)
// })



// document.getElementById("id").addEventListener()

/**
 * Context & Closure
 */
// 1) Khả năng cho 1 hàm nhớ về nơi nó được sinh ra
// 2) Context (execution context) chính là this. Tùy thuộc vào nơi sinh ra (khai báo) và nơi thực thi mà function sẽ có 1 context (execution-context)
/*
function myHOF(greet, callback) {
    const someObject = {
        k: 'v'
    }
    function someFunction() {
        function xFunction() {
            console.log(this)
            console.log(someObject)
        }
        return xFunction
    }
    return someFunction
}

const some = myHOF()
const x = some()
// x()

const obj = {
    "kk": "vv",
    ff: function(cb) {
        cb()
        console.log(this)
        x()
    }
}

function cbF() {
    this["kkk"] = "vvv"
    console.log(this)
}

cbF = cbF.bind(obj)
obj.ff(cbF)
console.log(obj)

obj.ff(function() {
    this["kkk"] = "vvv"
    console.log(this)
})
*/

/**
 * Thread - Thứ tự thực hiện các dòng code
 */

/**
 * Async - Bất đồng bộ
 */
/*
setTimeout(() => {                  // Khai báo trước nhưng chạy sau vì chờ 2s
    console.log("Run after 2s") 
}, 2000)
console.log("Run now")  // Chạy trước
*/

/**
 * Promise
 */
// Web APIs
// Thread in JS
// 1) 1 luồng bình thường (Sync) và 1 luồng bất thường (bất đồng bộ - Async)
// Event Loops + Event Queue -> trái tim của lập trình async trong JS được implement bởi runtime sử dụng đa luồng
// Promise - 1 kiểu dữ liệu (1 class) dành cho lập trình bất đồng bộ
/*
const a = Promise.resolve()

a.then(() => {
    console.log("Exit")
})
*/

/*
const a = fetch("https://reqres.in/api/users?page=2")
console.log(a)
a.then(r => r.json()).then(r => {
    console.log(r)
})
console.log("abc")
*/

/*
async function getData(page) {
    const response = await fetch(`https://reqres.in/api/users?page=2 = ${page}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
}

console.log("Now")
getData(2)
console.log("Next now?")
*/

const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve("Some kind of data")
        }, 1000)
        console.log("In promise constructor")
    }
)

myPromise.then((data) => {
    console.log(data)
    return 1
})
.then((v) => {
    console.log(v)
    myP = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
            const f = resolve
            if (Math.random() > 0.2) {
                throw new Error("Some weird error?")
            }
            f("Line 179")
            } 
            catch (e) {
                reject(e)
            }
        },2000)
    })
    return myP
})
.catch(err => {
    console.log(err)
    console.log("Some error")
    return "ERROR VALUE"
})
.then((v) => {
    console.log("No error happens")
    console.log(v)
})
.then()
.catch(reason => {
    console.log("Catching error")
    console.log(reason)
})
console.log("Now")

/**
 * Xử lý Firebase
 */




