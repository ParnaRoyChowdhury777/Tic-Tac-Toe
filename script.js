let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let winnerblock = document.querySelector(".winner");
let winText = document.querySelector(".winner-text");
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
  winnerblock.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        boxes.forEach((box) => {
          box.disabled = true;
        });
        winText.innerText = `Congratulations, ${pos1val} wins!`;
        winnerblock.classList.remove("hide");
        confetti({
          particleCount: 200,
          spread: 150,
          origin: { y: 0.6 },
        });
        break;
      } else {
        let draw = 1;
        for (let i = 0; i < boxes.length; i++) {
          if (boxes[i].innerText == "") {
            draw = 0;
            break;
          }
        }
        if (draw == 1) {
          winText.innerText = `It's a draw!`;
          winnerblock.classList.remove("hide");
        }
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
