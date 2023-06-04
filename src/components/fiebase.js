// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBRTWw_xFm3TFSN4BWP8oGzs4BR_oMgReI",
    authDomain: "chargpt-53e08.firebaseapp.com",
    projectId: "chargpt-53e08",
    storageBucket: "chargpt-53e08.appspot.com",
    messagingSenderId: "558157944879",
    appId: "1:558157944879:web:4fc2961104379387514eda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signinwithgoogle = (navigate) => {
    signInWithPopup(auth, provider).then((res) => {
        console.log(res._tokenResponse.firstName);
        localStorage.setItem("username", res._tokenResponse.firstName);
        navigate('/home')
    })
}