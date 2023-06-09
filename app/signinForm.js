import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

// Obtener referencia al botón de inicio de sesión
const loginButton = document.querySelector("#login-button");
console.log("login esperando");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  console.log(email, password);

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // reset the form
    //signInForm.reset();

    // show welcome message
    showMessage("Welcome " + userCredentials.user.email);
    // redirigir mensaje
    window.location.href = "dashboard.html";
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Wrong password", "error");
    } else if (error.code === "auth/user-not-found") {
      showMessage("User not found", "error");
    } else {
      showMessage("Something went wrong", "error");
      console.log(error);
    }
  }
});
