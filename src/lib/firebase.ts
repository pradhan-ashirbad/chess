// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import type { Chess } from "chess.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiEotTbpNtjSP3Y2fy2nzcd2sEY2ORNjs",
  authDomain: "chess-b89e6.firebaseapp.com",
  projectId: "chess-b89e6",
  storageBucket: "chess-b89e6.appspot.com",
  messagingSenderId: "425536811722",
  appId: "1:425536811722:web:001eff2a97b45fbfd13a33"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getGameRef = (gameId: string) => {
    return doc(db, 'games', gameId);
}

export const subscribeToGame = (gameId: string, onUpdate: (gameData: any) => void) => {
    const gameRef = getGameRef(gameId);
    return onSnapshot(gameRef, (doc) => {
        onUpdate(doc.data());
    });
}

export const updateGame = async (gameId: string, game: Chess) => {
    const gameRef = getGameRef(gameId);
    await setDoc(gameRef, { fen: game.fen() }, { merge: true });
}

export const joinGame = async (gameId: string): Promise<'w' | 'b'> => {
  const gameRef = getGameRef(gameId);
  const docSnap = await getDoc(gameRef);

  if (!docSnap.exists()) {
    // If game doesn't exist, something is wrong. 
    // For now, let's just return 'w' and let the game component handle it.
    // A better approach would be to show an error.
    return 'w';
  }
  
  const gameData = docSnap.data();

  if (gameData && gameData.white && gameData.black) {
    // Game is full
    return 'w'; // Spectator
  }

  if (gameData && !gameData.white) {
    await setDoc(gameRef, { white: 'player1' }, { merge: true });
    return 'w';
  } else if (gameData && !gameData.black) {
    await setDoc(gameRef, { black: 'player2' }, { merge: true });
    return 'b';
  }
  
  // Default case if something is off
  return 'w';
};


export const createNewGame = async (gameId: string, game: Chess) => {
    const gameRef = getGameRef(gameId);
    await setDoc(gameRef, { 
        fen: game.fen(),
        white: null,
        black: null,
        createdAt: new Date(),
    });
};