function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  boxesContainer.innerHTML = '';
  
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    size += 10;
  }
}

document.querySelector('[data-create]').addEventListener('click', function() {
  const amountInput = document.querySelector('#controls input[type="number"]');
  const amount = parseInt(amountInput.value);
  if (!isNaN(amount) && amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    return;
  }
});

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-destroy]').addEventListener('click', function() {
  destroyBoxes();
});