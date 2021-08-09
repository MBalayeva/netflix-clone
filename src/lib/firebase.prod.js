import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmDRnvleZXz366J9v2AOacNOlPHDzHaHo",
  authDomain: "netflix-yt-9def3.firebaseapp.com",
  projectId: "netflix-yt-9def3",
  storageBucket: "netflix-yt-9def3.appspot.com",
  messagingSenderId: "110831597124",
  appId: "1:110831597124:web:6ad138bc5a0d7519d4ae11",
};

const firebase = Firebase.initializeApp(config);

export default firebase;
