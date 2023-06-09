import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
//import { setupMeds } from "./app/services/MedicamentosList.js";
//import "./app/signinForm.js";
import "./app/logout.js";
import { setupMeds } from "./app/services/MedicamentosList.js";

// list for auth state changes
console.log("main change");
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    console.log(" usuario chequeado");
    try {
      const userId = user.uid; // UID del usuario autenticado
      const medicamentosRef = ref(db, `user/${userId}/medicamentos`);

      // Escuchar cambios en los medicamentos del usuario
      onValue(medicamentosRef, (snapshot) => {
        if (snapshot.exists()) {
          const medicamentosData = snapshot.val();
          const medicamentos = Object.values(medicamentosData);
          //console.log(medicamentos);
          setupMeds(medicamentos);
          // Aquí puedes hacer lo que necesites con los datos de los medicamentos del usuario
        } else {
          console.log("No hay medicamentos disponibles para el usuario.");
        }
      });
    } catch (error) {
      console.log("No existe");
      console.log("Error try user49:", error);
    }
  } else {
    console.log(" usuario no chequeado");
  }
});
