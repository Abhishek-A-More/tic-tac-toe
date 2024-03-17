// selectors
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let message = document.querySelector("#msg")
let hidden = document.querySelector(".score")
let board = document.querySelector("#game")
let newBtn = document.querySelector("#new-btn")

// console.log(hidden)
// console.log(boxes)

// winner pattern
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// turn of player who choose O
let turnO = true;

// iteration with foreach to perform some operations on click event
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O"
            box.style.color = "#112A46";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
            box.style.color = "#500607";
        }

        // diable after click once
        box.disabled = true;

        checkWinner();
    })
});

// to disable all button after finish game
const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}



// winner message
const winner = (a) => {
    message.innerText = `Congratulations! Winner Is ${a}`;
    hidden.classList.remove("hide");
    resetBtn.classList.add("hide")
    disablebtn();

}

// draw message
const draw = () => {
    message.innerText = `Oops! It's Draw X = O`;
    hidden.classList.remove("hide");
    resetBtn.classList.add("hide")
    disablebtn();

}


// function to get winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern)
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                // console.log(`Winner-${posVal1}`)
                winner(posVal1)
            }
        }

    }
     
    // draw logic
    let d0 = boxes[0].innerText
    let d1 = boxes[1].innerText
    let d2 = boxes[2].innerText
    let d3 = boxes[3].innerText
    let d4 = boxes[4].innerText
    let d5 = boxes[5].innerText
    let d6 = boxes[6].innerText
    let d7 = boxes[7].innerText
    let d8 = boxes[8].innerText

    if (d0 !== "" && d1 !== "" && d2 !== "" && d3 !== "" && d4 !== "" && d5 !== "" && d6 !== "" && d7 !== "" && d8 !== "") {
        if ((d0 !== d1 !== d2) && (d0 !== d3 !== d6) && (d0 !== d4 !== d8) && (d1 !== d4 !== d7) && (d2 !== d5 !== d8) && (d2 !== d4 !== d6) && (d3 !== d4 !== d5) && (d6 !== d7 !== d8)) {
            draw();
        }
    }




}

// to make empty playboard
const clearbtn = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

// new game button
newBtn.addEventListener("click", () => {
    hidden.classList.add("hide");
    resetBtn.classList.remove("hide")
    clearbtn()
})

// reset button 
resetBtn.addEventListener("click", clearbtn)