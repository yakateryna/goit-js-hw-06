
  // Отримуємо посилання на елементи DOM
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Додаємо обробник події input для інпуту
  nameInput.addEventListener('input', function() {
    // Отримуємо поточне значення інпуту
    const name = nameInput.value;

    // Перевіряємо, чи є значення порожнім
    if (name.trim() === '') {
      // Якщо інпут порожній, встановлюємо "Anonymous" у спані
      nameOutput.textContent = 'Anonymous';
    } else {
      // Інакше встановлюємо поточне значення інпуту у спан
      nameOutput.textContent = name;
    }
  });

