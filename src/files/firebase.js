import firebase from 'firebase/compat/app';
import'firebase/compat/storage';
import'firebase/compat/firestore';

const firebaseConfig =firebase.initializeApp({
  apiKey: "AIzaSyCsy8I2leyU6ZOfztReAgQYxjDoJHgzH4Y",
  authDomain: "storage-app-3366b.firebaseapp.com",
  projectId: "storage-app-3366b",
  storageBucket: "storage-app-3366b.appspot.com",
  messagingSenderId: "55684526251",
  appId: "1:55684526251:web:1b8dc7f7852c667e1cc7ee"
});

const db = firebaseConfig.firestore();
const storage = firebaseConfig.storage();

export{db,storage};