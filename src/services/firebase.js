import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCvRdo2Dq-HsV-fB0230pBFQ_rnia2EHw",
  authDomain: "dixit-1617f.firebaseapp.com",
  databaseURL: "https://dixit-1617f.firebaseio.com",
  projectId: "dixit-1617f",
  messagingSenderId: "330687598117",
  appId: "1:330687598117:web:6759fb50411522225db9cc",
}

console.log("FIREBASE API SERVICE INITIALIZING")
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore()
window.firestore = firestore
export default firestore
