
let newGame = document.querySelector("#newgame-btn");
const boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winnerFound = false;

const winPattern = [
    [0,1,2],
    [2,5,8],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6],
    [3,4,5]
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
        checkTie();
    });
});

const showWinner = (winner) => {

    winnerFound = true;

    msg.innerText = `Congratulations, Winner is ${winner}`;

    msgContainer.classList.remove("hide");

    disableBoxes();
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const checkWinner = () => {

    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {

                showWinner(pos1Val);
            }
        }
    }
};

const checkTie = () => {

    let isTie = true;

    boxes.forEach((box) => {

        if (box.innerText === "") {
            isTie = false;
        }
    });

    if (isTie && !winnerFound) {

        msg.innerText = "Match Tie!";

        msgContainer.classList.remove("hide");
    }
};

resetbtn.addEventListener("click", () => {

    turnO = true;
    winnerFound = false;

    msgContainer.classList.add("hide");

    boxes.forEach((box) => {

        box.innerText = "";
        box.disabled = false;
    });
});