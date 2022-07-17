
export const firebaseConfig = {
    apiKey: "AIzaSyAPHiyvLfGbxAyPntg2grpzEf3K8i76afo",
    authDomain: "hackathon-firestore.firebaseapp.com",
    projectId: "hackathon-firestore",
    storageBucket: "hackathon-firestore.appspot.com",
    messagingSenderId: "764652480879",
    appId: "1:764652480879:web:db9e71e8f371bcc1f9609a",
    measurementId: "G-86K2T88EX7"
};

import { getFirestore, collection, onSnapshot, doc,
    addDoc, deleteDoc, } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js'

//initialization of firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

//collection reference
const collaboratorsColRef = collection(db, 'collaborators')

export default collaboratorsColRef 
