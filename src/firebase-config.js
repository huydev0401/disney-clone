import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZR5QaoZ_PL4e5mY-VHd35bQ1VVMcWtmw",
  authDomain: "disney-clone-fc795.firebaseapp.com",
  projectId: "disney-clone-fc795",
  storageBucket: "disney-clone-fc795.appspot.com",
  messagingSenderId: "295843272175",
  appId: "1:295843272175:web:196b117a93574f5f6e921a",
  measurementId: "G-EH347Y5ED7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
