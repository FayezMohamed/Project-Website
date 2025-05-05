function login() {
  const desiredUsername = "username"
  const enteredUsername = document.getElementById("username").value.trim()
  const desiredPassword = "password"
  const enteredPassword = document.getElementById("password").value.trim()
  const message = document.getElementById("message")

  if (enteredUsername === desiredUsername && enteredPassword === desiredPassword) {
    message.textContent = "Login Successful!"
    message.style.color = "green"
    setTimeout(() => {
  window.location.href = "main.html";
}, 1000);
  }
  else {
    message.textContent = "Sorry, incorrect username or password."
    message.style.color = "Red"
  }
}
