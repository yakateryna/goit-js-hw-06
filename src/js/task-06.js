// Отримуємо посилання на елементи DOM
  const validationInput = document.getElementById('validation-input');

  // Отримуємо правильну кількість символів з атрибута data-length
  const expectedLength = parseInt(validationInput.getAttribute('data-length'));

  // Додаємо обробник події blur для інпуту
  validationInput.addEventListener('blur', function() {
    // Отримуємо введене значення
    const inputText = validationInput.value;

    // Перевіряємо кількість символів
    if (inputText.length === expectedLength) {
      // Якщо кількість символів відповідає очікуваній, додаємо клас "valid"
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
    } else {
      // Інакше, додаємо клас "invalid"
      validationInput.classList.add('invalid');
      validationInput.classList.remove('valid');
    }
  });