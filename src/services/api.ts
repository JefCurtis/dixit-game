import { generatePlayerModel } from "./player-service"
import { collectIdsAndDocs } from "./utilities"
import firestore from "./firebase"
import firebase from "firebase/app"

type Api = {
  subscribeToGame: (id, callback) => void
}

const api = {
  getGame: gameCode => {
    const code = Number.parseInt(gameCode)
    if (code === NaN) {
      return Promise.resolve(null)
    }
    return firestore
      .collection("games")
      .where("code", "==", Number.parseInt(gameCode))
      .limit(1)
      .get()
      .then(snapshot => {
        const games = snapshot.docs.map(collectIdsAndDocs)
        return games.length > 0 ? games[0] : null
      })
      .catch(e => {
        console.log(e)
      })
  },

  createGame: ({ deckVersion, playerName }) => {
    const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
    const player = generatePlayerModel(playerName)

    return firestore
      .collection(`games`)
      .add({
        code,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        deckVersion,
        players: [player],
      })
      .then(docRef => docRef.id)
      .catch(e => console.log(e))
  },

  addPlayer: ({ gameId, playerName }) => {
    const playerObject = generatePlayerModel(playerName)
    return firestore.doc(`games/${gameId}`).update({
      players: firebase.firestore.FieldValue.arrayUnion(playerObject),
    })
  },

  subscribeToGame: (id, callback) => {
    firestore.doc(`games/${id}`).onSnapshot(callback)
  },
} as Api

export default api
