// Retrieve the username from the local storage.
// JavaScript event listener for the form's submit event.
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting to the server.
    event.preventDefault();
  
    // Get the form data.
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Store the form data in a JavaScript object.
    const formData = {
      username: username,
      email: email,
      password: password,
    };
  
    // Save the JavaScript object to the browser's local storage.
    localStorage.setItem('formData', JSON.stringify(formData));
  });