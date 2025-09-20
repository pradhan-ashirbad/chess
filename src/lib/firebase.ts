// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, getDoc, updateDoc } from "firebase/firestore";
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
    await updateDoc(gameRef, { fen: game.fen() });
}

export const joinGame = async (gameId: string): Promise<'w' | 'b' | 'spectator'> => {
  const gameRef = getGameRef(gameId);
  const docSnap = await getDoc(gameRef);

  if (!docSnap.exists()) {
    console.log("No such document! Creating new game.");
    await createNewGame(gameId, new Chess());
    // After creating, try joining again. This recursive call should be safe.
    return joinGame(gameId);
  }
  
  const gameData = docSnap.data();
  // Using simple IDs for now. In a real app, use Firebase Auth UIDs.
  const player1Id = 'player1'; 
  const player2Id = 'player2';

  // This logic is simplified and assumes the first user to join is player1
  if (gameData.white === player1Id) return 'w';
  if (gameData.black === player1Id) return 'b';
  if (gameData.white === player2Id) return 'w'; // If user refreshes as player2
  if (gameData.black === player2Id) return 'b';


  if (!gameData.white) {
    await updateDoc(gameRef, { white: player1Id });
    return 'w';
  } else if (!gameData.black) {
    // A different user joins as black
    await updateDoc(gameRef, { black: player2Id });
    return 'b';
  }
  
  return 'spectator';
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
