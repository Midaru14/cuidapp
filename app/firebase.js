import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhkOwk2vkc0pfNpX_1rG7Eok0svK4WBZY",
  authDomain: "cuidapp-3b276.firebaseapp.com",
  databaseURL: "https://cuidapp-3b276-default-rtdb.firebaseio.com",
  projectId: "cuidapp-3b276",
  storageBucket: "cuidapp-3b276.appspot.com",
  messagingSenderId: "539151312799",
  appId: "1:539151312799:web:eaabddbf490dcdd5083faa",
  measurementId: "G-5DP64W0E1W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app);
export const db = getDatabase(app);
