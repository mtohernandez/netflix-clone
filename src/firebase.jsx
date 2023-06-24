import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const { VITE_API_FIREBASE_KEY } = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_FIREBASE_KEY,
  authDomain: "netflix-clone-app-b1ae9.firebaseapp.com",
  projectId: "netflix-clone-app-b1ae9",
  storageBucket: "netflix-clone-app-b1ae9.appspot.com",
  messagingSenderId: "768027510993",
  appId: "1:768027510993:web:b57b1ca5e3c3cdd9efddf0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

export { auth };
export default db;