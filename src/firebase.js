import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4Ve1lU5NvPMvpxu-laSNQPuTjv_QpTR4",
  authDomain: "koushik-protfolio.firebaseapp.com",
  projectId: "koushik-protfolio",
  storageBucket: "koushik-protfolio.appspot.com",
  messagingSenderId: "1087436468805",
  appId: "1:1087436468805:web:58a0fe515cf9637cde292c",
  measurementId: "G-1T5DLBTV57",
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
