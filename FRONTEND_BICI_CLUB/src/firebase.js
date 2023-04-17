import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

/* firebaseConfig */
const firebaseConfig = {
    apiKey: "AIzaSyCstbBQsdpXzosyWfqADa1LI0uxzL0rqTg",
    authDomain: "bici-club.firebaseapp.com",
    projectId: "bici-club",
    storageBucket: "bici-club.appspot.com",
    messagingSenderId: "153663318319",
    appId: "1:153663318319:web:029655180ac5f6bfad59da",
    measurementId: "G-13T1E2NBRZ"
};
  
/* inicializando firebase */
export const app  = initializeApp(firebaseConfig);
/* inicializando la variable que va a contener toda la info del auth */
export const auth = getAuth(app);
export const googleAuthProvider   = auth.googleAuthProvider();
export const facebookAuthProvider = auth.facebookAuthProvider();
/* firebaseConfig */