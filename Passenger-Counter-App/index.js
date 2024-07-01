let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//Not setting it back to 0
// function save() {
//     let countStr = count + ", "
//     saveEl.textContent += countStr
// }

//setting it back to 0

function save() {
    let countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}