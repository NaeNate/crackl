import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyCPnADj6y6jjXkiCqzwTHv5nD8YWPxCRnE",
  authDomain: "crackl.firebaseapp.com",
  projectId: "crackl",
  storageBucket: "crackl.appspot.com",
  messagingSenderId: "470206063714",
  appId: "1:470206063714:web:aae98114617504f2281d3b",
})

export const db = getFirestore(app)
