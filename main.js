import {
  getApps,
  initializeApp,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { auth } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";
import "./app/signinForm.js";
import "./app/logout.js";
import "./app/postList.js";

// Verificar si ya existe una instancia de la aplicación
const firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

// Obtener las referencias necesarias
const database = getDatabase(firebaseApp);

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    console.log("Check usuario");
    try {
      const postsRef = ref(database, "posts");
      onValue(postsRef, (snapshot) => {
        if (snapshot.exists()) {
          const postsData = snapshot.val();
          const posts = Object.values(postsData);
          console.log("snapshot.exists");
          setupPosts(posts);
        } else {
          // No hay datos de posts disponibles
          setupPosts([]);
          console.log("snapshot.noexists");
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
});
