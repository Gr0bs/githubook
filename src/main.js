import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

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

let app

firebase.auth().onAuthStateChanged(user => {
    if(!app){
        createApp(App).use(router).mount('#app')
    }
})

