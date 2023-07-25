 // Отримуємо посилання на елементи DOM
  const fontSizeControl = document.getElementById('font-size-control');
  const textSpan = document.getElementById('text');

  // Додаємо обробник події input для повзунка
  fontSizeControl.addEventListener('input', function() {
    // Отримуємо значення повзунка
    const fontSize = fontSizeControl.value;

    // Оновлюємо розмір тексту у спані
    textSpan.style.fontSize = fontSize + 'px';
  });