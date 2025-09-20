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
    const lastMove = game.history({verbose: true}).pop();
    if (!lastMove) return;

    await updateDoc(gameRef, { 
        fen: game.fen(),
        lastMove: { from: lastMove.from, to: lastMove.to }
    });
}

export const joinGame = async (gameId: string): Promise<'w' | 'b' | 'spectator'> => {
  const gameRef = getGameRef(gameId);
  const docSnap = await getDoc(gameRef);

  if (!docSnap.exists()) {
    // This case should ideally not be hit if createNewGame is awaited, but is good for robustness
    await createNewGame(gameId, new Chess());
    await updateDoc(gameRef, { white: 'player1' });
    return 'w';
  }
  
  const gameData = docSnap.data();
  // Using simple IDs for now. In a real app, use Firebase Auth UIDs.
  const tempUserId = localStorage.getItem('chessUserId') || `user_${Date.now()}`;
  localStorage.setItem('chessUserId', tempUserId);


  if (gameData.white === tempUserId) return 'w';
  if (gameData.black === tempUserId) return 'b';


  if (!gameData.white) {
    await updateDoc(gameRef, { white: tempUserId });
    return 'w';
  } else if (!gameData.black) {
    await updateDoc(gameRef, { black: tempUserId });
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
