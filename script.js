// let num = 0;
// h3.innerText = num;
// IamBtn.addEventListener("click", () => {
//   h3.innerText = ++num;
// });

// resultBox.appendChild(h3);

const resultBox = document.querySelector(".result");
const h3 = document.createElement("h3");
const reset = document.getElementById("reset");

const turnO = document.getElementById("turnO");
const turnX = document.getElementById("turnX");

turnO.style.backgroundColor = "aliceblue";
turnX.style.backgroundColor = "#eb0fcd";

const boxes = document.querySelectorAll(".box");

let turn = "X";
let gameOver = false;

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if ((e.innerHTML === "") & !gameOver) {
      e.innerHTML = turn;
      changeTrun();
      isGameWin();
      darwMatch();
    }
  });
});

const changeTrun = (i) => {
  if (turn === "X") {
    turn = "O";
    turnO.style.backgroundColor = "#eb0fcd";
    turnX.style.backgroundColor = "aliceblue";
  } else {
    turn = "X";
    turnO.style.backgroundColor = "aliceblue";
    turnX.style.backgroundColor = "#eb0fcd";
  }
  return;
};

const isGameWin = () => {
  let checkWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < checkWin.length; i++) {
    let result1 = boxes[checkWin[i][0]].innerHTML;
    let result2 = boxes[checkWin[i][1]].innerHTML;
    let result3 = boxes[checkWin[i][2]].innerHTML;

    if ((result1 != "") & (result1 === result2) && result1 === result3) {
      gameOver = true;
      h3.innerHTML = result1 + " win!";
      resultBox.appendChild(h3);
      reset.style.display = "block";
      for (let j = 0; j < 3; j++) {
        boxes[checkWin[i][j]].style.backgroundColor = "green";
        boxes[checkWin[i][j]].style.color = "white";
      }
      //   return;
    }
  }
};

const darwMatch = () => {
  if (!gameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") {
        isDraw = false;
      }
    });
    if (isDraw) {
      gameOver = true;
      h3.innerHTML = "Match Draw";
      resultBox.appendChild(h3);
      reset.style.display = "block";
    }
  }
};

reset.addEventListener("click", () => {
  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.backgroundColor='rgba(4, 226, 255, 0.747)'
  });
  turn = "X";
  gameOver = false;
  turnO.style.backgroundColor = "aliceblue";
  turnX.style.backgroundColor = "#eb0fcd";
  reset.style.display = "none";
  resultBox.removeChild(h3);
});
