import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAII5npW0U_XPD4VEPnGR57t0_ISUtxqvo",
    authDomain: "twitter-clone-d24a5.firebaseapp.com",
    databaseURL: "https://twitter-clone-d24a5.firebaseio.com",
    projectId: "twitter-clone-d24a5",
    storageBucket: "twitter-clone-d24a5.appspot.com",
    messagingSenderId: "617222756449",
    appId: "1:617222756449:web:9601cff4ec166a2eea7220"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.database().ref();

export default storage;