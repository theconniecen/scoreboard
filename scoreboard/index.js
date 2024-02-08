let homescore = 12 // initialize homescore = 12
let guestscore = 5 // initialize guestscore = 5

//homescore

function add1home() {
    let score = parseInt(document.getElementById("homescore-el").textContent, 10); // Convert text to number, base 10 (standard decimal system)
    let sum = score + 1; //set equation for sum
    document.getElementById("homescore-el").textContent = sum
}

function add2home() {
    let score = parseInt(document.getElementById("homescore-el").textContent, 10);
    let sum = score + 2;
    document.getElementById("homescore-el").textContent = sum 
}

function add3home() {
    let score = parseInt(document.getElementById("homescore-el").textContent, 10);
    let sum = score + 3;
    document.getElementById("homescore-el").textContent = sum
}


//guestscore

function add1guest() {
    let score = parseInt(document.getElementById("guestscore-el").textContent, 10);
    let sum = score + 1;
    document.getElementById("guestscore-el").textContent = sum
}

function add2guest() {
    let score = parseInt(document.getElementById("guestscore-el").textContent, 10);
    let sum = score + 2;
    document.getElementById("guestscore-el").textContent = sum
}

function add3guest() {
    let score = parseInt(document.getElementById("guestscore-el").textContent, 10);
    let sum = score + 3;
    document.getElementById("guestscore-el").textContent = sum
}