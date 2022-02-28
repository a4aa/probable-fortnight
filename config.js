import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEn3D90VA0ZxdW5dbNYmR8YHg1_M_BUkU",
  authDomain: "e-ride-stage-4-3efaf.firebaseapp.com",
  projectId: "e-ride-stage-4-3efaf",
  storageBucket: "e-ride-stage-4-3efaf.appspot.com",
  messagingSenderId: "389975331465",
  appId: "1:389975331465:web:4ef48474dda8dd28ec6c58"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
