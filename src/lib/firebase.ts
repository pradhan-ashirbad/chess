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
    // Use updateDoc instead of setDoc with merge to avoid creating a new doc if it doesn't exist
    // during a game update.
    await updateDoc(gameRef, { fen: game.fen() });
}

export const joinGame = async (gameId: string): Promise<'w' | 'b' | 'spectator'> => {
  const gameRef = getGameRef(gameId);
  const docSnap = await getDoc(gameRef);

  if (!docSnap.exists()) {
    // This should ideally not be reached if games are created properly before joining.
    // However, if a user tries to join a non-existent game, we can treat them as a spectator
    // and the game component can show an appropriate "Game not found" message.
    console.error("Game not found!");
    return 'spectator';
  }
  
  const gameData = docSnap.data();
  const player1Id = 'player1'; // In a real app, this would be a unique user ID.
  const player2Id = 'player2'; // In a real app, this would be a different unique user ID.

  // Simple check to see if current user is already a player
  // This logic would need to be more robust with actual user authentication
  if (gameData.white === player1Id) return 'w';
  if (gameData.black === player1Id) return 'b';


  if (!gameData.white) {
    await updateDoc(gameRef, { white: player1Id });
    return 'w';
  } else if (!gameData.black) {
    await updateDoc(gameRef, { black: player2Id });
    return 'b';
  }
  
  // Game is full, join as spectator
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
