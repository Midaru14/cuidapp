import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

console.log("signed out in");
const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth);
    console.log("signed out");
    window.location.href = "contacto.html";
  } catch (error) {
    console.log(error);
  }
});
