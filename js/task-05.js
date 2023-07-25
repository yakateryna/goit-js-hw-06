
 
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

 
  nameInput.addEventListener('input', function() {
  
    const name = nameInput.value;

    
    if (name.trim() === '') {
     
      nameOutput.textContent = 'Anonymous';
    } else {
     
      nameOutput.textContent = name;
    }
  });

