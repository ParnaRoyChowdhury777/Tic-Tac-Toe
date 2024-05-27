let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let winnerblock = document.querySelector(".winner");
let replay = document.querySelector(".play-again");

let turns0 = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const newGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.backgroundColor = "white";
  });
  winnerblock.classList.remove("show");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        winnerblock.classList.add("show");
        break;
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turns0 == 0) {
      box.innerText = "X";
      turns0 = 1;
      box.style.backgroundColor = "red";
    } else {
      box.innerText = "O";
      turns0 = 0;
      box.style.backgroundColor = "blue";
    }
    box.disabled = true;
    checkWinner();
  });
});

resetbtn.addEventListener("click", newGame);
replay.addEventListener("click", newGame);
