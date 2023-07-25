const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо стандартну поведінку форми (перезавантаження сторінки)

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value === '') {
      alert('Please fill in all fields');
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(formData);

      loginForm.reset(); // Очищаємо значення полів форми
    }
  });
