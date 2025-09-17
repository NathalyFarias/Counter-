const countEl = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateDisplay() {
  countEl.textContent = count;

  // animação de fade + bounce
  countEl.style.opacity = '0';
  countEl.style.transform = 'scale(1.3)';
  setTimeout(() => {
    countEl.style.opacity = '1';
    countEl.style.transform = 'scale(1)';
  }, 150);
}

increaseBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
