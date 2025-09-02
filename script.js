const CORRECT_CODE = "29657";
let input = "";
const display = document.getElementById("display");
const msg = document.getElementById("msg");
const buttons = document.querySelectorAll(".keypad-overlay button");

function updateDisplay() {
  display.textContent = input.replace(/./g, "•");
}

function clearInput() {
  input = "";
  updateDisplay();
}

function showError() {
  msg.textContent = "Código incorreto";
  setTimeout(() => { msg.textContent = ""; }, 1200);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (input.length >= 8) return; // limita o input
    const key = btn.getAttribute("data-key");
    if (key === "*") {
      clearInput();
      return;
    }
    if (key === "#") {
      if (input === CORRECT_CODE) {
        msg.textContent = "Acesso permitido!";
        setTimeout(() => {
          window.location.href = "pc.html"; // próxima página (Windows XP)
        }, 700);
      } else {
        showError();
        clearInput();
      }
      return;
    }
    if (!/^[0-9]$/.test(key)) return;
    input += key;
    updateDisplay();
  });
});

updateDisplay();