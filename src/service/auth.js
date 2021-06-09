import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUTlmNlwtif0PS0HLKfdmXPTjnjmaSyI0",
    authDomain: "githubsocial.firebaseapp.com",
    projectId: "githubsocial",
    storageBucket: "githubsocial.appspot.com",
    messagingSenderId: "513777776854",
    appId: "1:513777776854:web:d52ac4716e5b61ff407177",
    measurementId: "G-7E7572WSTD"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const githubProvider = new firebase.auth.GithubAuthProvider()

githubProvider.addScope('repo');

const githubAuth = async () => {
    firebase
        .auth()
        .signInWithPopup(githubProvider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            const credential = result.credential;

            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
}

export default githubAuth