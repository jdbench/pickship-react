import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
})

const firestore = app.firestore()
export const database = {
  locations: firestore.collection('locations'),
  products: firestore.collection('products'),
  picklist: firestore.collection('picklist'),
  accounts: firestore.collection('accounts'),
  getCurrentTimestame: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc=> {
    return { id: doc.id, ...doc.data() }
  }
}
export const auth = app.auth()
export default app