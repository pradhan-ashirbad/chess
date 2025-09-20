// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import type { Chess } from "chess.js";

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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

export const joinGame = async (gameId: string) => {
    const gameRef = getGameRef(gameId);
    let playerColor: 'w' | 'b' = 'w';
    
    await setDoc(gameRef, {}, { merge: true }); // Ensure document exists
    
    return new Promise<'w' | 'b'>((resolve) => {
        const unsubscribe = onSnapshot(gameRef, async (docSnap) => {
            const gameData = docSnap.data();
            if (gameData) {
                if (!gameData.white) {
                    await setDoc(gameRef, { white: 'player1' }, { merge: true });
                    playerColor = 'w';
                    unsubscribe();
                    resolve(playerColor);
                } else if (!gameData.black) {
                    await setDoc(gameRef, { black: 'player2' }, { merge: true });
                    playerColor = 'b';
                    unsubscribe();
                    resolve(playerColor);
                } else if (gameData.white === 'player1') {
                    // This logic is simplified, assuming the first joiner is white
                    // and second is black. A real app would need more robust user identification.
                    playerColor = 'b';
                    unsubscribe();
                    resolve(playerColor);
                } else {
                     playerColor = 'w';
                     unsubscribe();
                     resolve(playerColor);
                }
            }
        });
    });
};

export const createNewGame = async (gameId: string, game: Chess) => {
    const gameRef = getGameRef(gameId);
    await setDoc(gameRef, { 
        fen: game.fen(),
        white: 'player1', // Assign creator as white
        black: null,
        createdAt: new Date(),
    });
};