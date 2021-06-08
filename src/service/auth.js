import firebase from '../config/firebase'

const githubAuth = (provider) => {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => res.user)
        .catch(err => err)
}

export default githubAuth