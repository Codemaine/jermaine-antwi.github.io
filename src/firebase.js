import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRltYd4X9iWdbjoK8Z0dZHmBtjoqK2-MQ",
  authDomain: "maine-porfolio.firebaseapp.com",
  projectId: "maine-porfolio",
  storageBucket: "maine-porfolio.appspot.com",
  messagingSenderId: "1059797304856",
  appId: "1:1059797304856:web:690f203ab48d4356f8256d",
  measurementId: "G-WF37HXVWFL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default app
export { db }