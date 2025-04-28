const IamBtn = document.getElementById("IamBtn");
const resultBox = document.querySelector(".result");

const h3 = document.createElement("h3");

let num = 0;
h3.innerText = num;
IamBtn.addEventListener("click", () => {
  h3.innerText = ++num;
});

resultBox.appendChild(h3);
