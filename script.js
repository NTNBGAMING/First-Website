const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const users = {
  admin: { password: 'password' },
  NTNB: { password: 'Jihad4952' },
  User: { password: 'user1' },
  1: { password: '1' },
  
  2: { password: '2' },
  2: { password: '.' },
};


form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate username and password
  if (!usernameInput.value || !passwordInput.value) {
    errorMessage.textContent = 'Please enter your username and password.';
    errorMessage.style.display = 'block';
    return;
  }

  // Send login information to server (replace with actual server communication)
  if (users.hasOwnProperty(usernameInput.value) && users[usernameInput.value].password === passwordInput.value) {
  // Login successful
    window.location.href = 'index.html';
  }
 
  else {
    // Login failed
    errorMessage.textContent = 'Invalid username or password.';
    errorMessage.style.display = 'block';
  }
});
