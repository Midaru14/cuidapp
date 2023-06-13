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
import { setupInds } from "./app/services/IndicacionesList.js";
import { setupUsu } from "./app/services/UsuarioList.js";
import { seutupAnot } from "./app/services/AnotacionesList.js";

// list for auth state changes
console.log("main change");
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    console.log(" usuario chequeado");
    //PRIMER TRY - USUARIO
    const userId = user.uid; // UID del usuario autenticado
    try {
      //manejo de datos del usuario
      const usuarioRef = ref(db, `Usuarios/${userId}`);
      // Escuchar cambios en los medicamentos del usuario
      onValue(usuarioRef, (snapshot) => {
        if (snapshot.exists()) {
          const usuarioData = snapshot.val();
          const usuarioDatos = Object.values(usuarioData);
          setupUsu(usuarioDatos);
          // Aquí puedes hacer lo que necesites con los datos de los medicamentos del usuario
        } else {
          console.log("No hay datos de usuario");
        }
      });
    } catch {
      console.log("catch de usuario");
    }
    //SEGUNDO TRY - ANOTACIONES
    try {
      //manejo de anotaciones del usuario
      const anotacionesRef = ref(db, `pacientes/${userId}/Comentarios`);
      // Escuchar cambios en los medicamentos del usuario
      onValue(anotacionesRef, (snapshot) => {
        if (snapshot.exists()) {
          const usuarioAnot = snapshot.val();
          const usuarioAnotac = Object.values(usuarioAnot);
          seutupAnot(usuarioAnotac);
          // Aquí puedes hacer lo que necesites con los datos de los medicamentos del usuario
        } else {
          console.log("No hay datos de usuario");
        }
      });
    } catch {
      console.log("catch de anotaciones");
    }
    //TERCER CATCH MEDICAMENTOS
    try {
      //manejo de datos de medicamentos
      const medicamentosRef = ref(db, `pacientes/${userId}/medicamentos`);

      // Escuchar cambios en los medicamentos del usuario
      onValue(medicamentosRef, (snapshot) => {
        if (snapshot.exists()) {
          const medicamentosData = snapshot.val();
          const medicamentos = Object.values(medicamentosData);
          setupMeds(medicamentos);
          // Aquí puedes hacer lo que necesites con los datos de los medicamentos del usuario
        } else {
          console.log("No hay medicamentos disponibles para el usuario.");
          const MedMens = document.querySelector(".lbl-me-mensaje");
          MedMens.innerHTML = " <p>No hay medicamentos registrados</p>";
        }
      });
    } catch (error) {
      console.log("catch medicamentos");
      console.log("Error try user49:", error);
    }
    //CUARTO CATCH INDICACIONES
    try {
      //manejo de datos de indicaciones
      const actividadesRef = ref(db, `pacientes/${userId}/actividades`);
      //escuchar cambios en las indicaciones de los usuarios
      onValue(actividadesRef, (snapshot) => {
        if (snapshot.exists()) {
          const indicacionesData = snapshot.val();
          const indicaciones = Object.values(indicacionesData);
          setupInds(indicaciones);
          // Aquí puedes hacer lo que necesites con los datos de los medicamentos del usuario
        } else {
          console.log("no existe snap de indicaciones");
          const MesAnot = document.querySelector(".lbl-anot-mensaje");
          MesAnot.innerHTML = " <p>No hay anotaciones registradas</p>";
        }
      });
    } catch {
      console.log("catch indicaciones");
    }
  } else {
    console.log(" usuario no chequeado");
  }
});
