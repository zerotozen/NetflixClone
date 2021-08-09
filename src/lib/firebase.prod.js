import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA7MsnmVq-VUrvmTH5YS91YQd_AJ2Ic470",
  authDomain: "netflix-clone-330a6.firebaseapp.com",
  projectId: "netflix-clone-330a6",
  storageBucket: "netflix-clone-330a6.appspot.com",
  messagingSenderId: "861408239374",
  appId: "1:861408239374:web:adb0c138ee42b73418415f",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
