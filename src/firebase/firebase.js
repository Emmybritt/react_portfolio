import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAUy1B9_IG8XW2yG1rin92RUf07ZOOZbqc",
	authDomain: "my-portfolio-b9801.firebaseapp.com",
	projectId: "my-portfolio-b9801",
	storageBucket: "my-portfolio-b9801.appspot.com",
	messagingSenderId: "453130969991",
	appId: "1:453130969991:web:5e5805ee681c7653436922",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
