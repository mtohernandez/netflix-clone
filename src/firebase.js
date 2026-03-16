import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxvilFHH_AkZ-8Qt4PdzznsThtAWGGKE4",
  authDomain: "netflix-clone-app-b1ae9.firebaseapp.com",
  projectId: "netflix-clone-app-b1ae9",
  storageBucket: "netflix-clone-app-b1ae9.firebasestorage.app",
  messagingSenderId: "768027510993",
  appId: "1:768027510993:web:b57b1ca5e3c3cdd9efddf0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
