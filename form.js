document.addEventListener('DOMContentLoaded', () => {
    const formControls = document.querySelectorAll('.form-group input, .form-group textarea');
  
    formControls.forEach(input => {
      // Check the initial value when the page loads
      if (input.value !== '') {
        input.nextElementSibling.classList.add('active');
      }
  
      // Add event listeners for focus and blur events
      input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('active');
      });
  
      input.addEventListener('blur', () => {
        if (input.value === '') {
          input.nextElementSibling.classList.remove('active');
        }
      });
    });
  });
  