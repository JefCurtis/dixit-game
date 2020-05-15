import firebase from "firebase"
import { generatePlayerModel } from "./player-service"

const firebaseConfig = {
  apiKey: "AIzaSyDCvRdo2Dq-HsV-fB0230pBFQ_rnia2EHw",
  authDomain: "dixit-1617f.firebaseapp.com",
  databaseURL: "https://dixit-1617f.firebaseio.com",
  projectId: "dixit-1617f",
  messagingSenderId: "330687598117",
  appId: "1:330687598117:web:6759fb50411522225db9cc",
}

console.log("FIREBASE API SERVICE INITIALIZING")
firebase.initializeApp(firebaseConfig)
const firebaseApi = firebase.firestore()
const handleResponse = res => res.data()

const firebaseApiService = {
  getGame: id => {
    return firebaseApi
      .collection(`games/${id}`)
      .then(res => {
        handleResponse(res)
      })
      .catch(e => {
        console.log(e)
      })
  },

  createGame: ({ gameDeck, players }) => {
    const gameCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
    const playerObjects = players.map(name => generatePlayerModel(name))

    return firebaseApi
      .collection(`games`)
      .doc(`${gameCode}`)
      .set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        deckVersion: gameDeck,
        players: playerObjects,
      })
      .then(() => gameCode)
      .catch(e => console.log(e))
  },
}

// firebaseApi
//   .collection("users")
//   .add({
//     color: "red",
//     language: "en",
//     name: "Jef C",
//     score: 12,
//     state: "storyteller",
//   })
//   .then(res => {
//     console.log("res: ", res)
//   })
//   .catch(e => {
//     console.log("error", e)
//   })

export default firebaseApiService
