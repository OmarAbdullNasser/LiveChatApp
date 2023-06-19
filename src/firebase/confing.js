import   firebase from 'firebase/app'
import 'firebase/firestore'
import  'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCfccM2tGHxlGLXWaS_CMYJ9pQw_rJmJy0",
    authDomain: "vue3-crouse-projects.firebaseapp.com",
    projectId: "vue3-crouse-projects",
    storageBucket: "vue3-crouse-projects.appspot.com",
    messagingSenderId: "132337495871",
    appId: "1:132337495871:web:a50b8b1ec62dc5c3f1ad8a"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth(); 
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export{ projectAuth,projectFirestore,timestamp}