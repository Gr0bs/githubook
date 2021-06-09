import firebase from 'firebase'
import 'firebase/auth'

const githubProvider = new firebase.auth.GithubAuthProvider()

githubProvider.addScope('repo');

const githubAuth = () => {
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