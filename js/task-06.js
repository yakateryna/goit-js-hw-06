
  const validationInput = document.getElementById('validation-input');


  const expectedLength = parseInt(validationInput.getAttribute('data-length'));

  
  validationInput.addEventListener('blur', function() {
  
    const inputText = validationInput.value;

  
    if (inputText.length === expectedLength) {
     
      validationInput.classList.add('valid');
      validationInput.classList.remove('invalid');
    } else {
    
      validationInput.classList.add('invalid');
      validationInput.classList.remove('valid');
    }
  });