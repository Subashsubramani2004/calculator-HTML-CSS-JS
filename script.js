let box1El = document.getElementById("box1");
let box2El = document.getElementById("box2");
let resultEl = document.getElementById("res");

function add() {
    let box1ElVal = Number(box1El.value);
    let box2ElVal = Number(box2El.value);
    resultEl.textContent = box1ElVal + box2ElVal;
}

function sub() {
    let box1ElVal = Number(box1El.value);
    let box2ElVal = Number(box2El.value);
    resultEl.textContent = box1ElVal - box2ElVal;
}

function mul() {
    let box1ElVal = Number(box1El.value);
    let box2ElVal = Number(box2El.value);
    resultEl.textContent = box1ElVal * box2ElVal;
}

function div() {
    let box1ElVal = Number(box1El.value);
    let box2ElVal = Number(box2El.value);
    resultEl.textContent = box1ElVal / box2ElVal;
}