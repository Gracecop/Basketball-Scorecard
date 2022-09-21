let scoreC = document.getElementById("scorecard")
let butC = document.getElementById("btn")
let Score = 0

function scoreCard () {
    Score += 1
    butC.textContent = Score 
}

let bnt = document.getElementById("btn2")

function btnEl() {
    Score += 2
    butC.textContent = Score 
}

let tt = document.getElementById("btn3")

function onEl() {
    Score += 3
    butC.textContent = Score
}

let cnnEL = document.getElementById("cnn")
let bbcEl = document.getElementById("bbc")
let poor = 0

function cnnEl() {
    poor += 1
    bbcEl.textContent = poor
}

let coo = document.getElementById("coo")

function cooEl() {
    poor += 2
    bbcEl.textContent = poor
}
let man = document.getElementById("man")

function manEL() {
    poor += 3
    bbcEl.textContent = poor
}
