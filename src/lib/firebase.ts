
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { Chess } from "chess.js";

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
        const data = doc.data();
        if (data && data.lastMoveTimestamp && data.lastMoveTimestamp.toDate) {
            data.lastMoveTimestamp = data.lastMoveTimestamp.toDate().getTime();
        }
        onUpdate(data);
    });
}

export const updateGame = async (gameId: string, game: Chess, remainingTime?: number | null) => {
    const gameRef = getGameRef(gameId);
    const history = game.history({verbose: true});
    const lastMove = history.length > 0 ? history[history.length-1] : null;
    
    const updateData: any = {
        fen: game.fen(),
        pgn: game.pgn(),
        lastMove: null,
        lastMoveTimestamp: serverTimestamp(),
    };

    if (lastMove) {
        updateData.lastMove = { from: lastMove.from, to: lastMove.to };
    }
    
    if (remainingTime !== undefined && remainingTime !== null) {
      const turn = game.turn() === 'w' ? 'b' : 'w'; // The player who just moved
      if (turn === 'w') {
        updateData.whiteTime = remainingTime;
      } else {
        updateData.blackTime = remainingTime;
      }
    }
    
    await updateDoc(gameRef, updateData);
}

export const joinGame = async (gameId:string, timeControl?: number): Promise<{color: 'w' | 'b' | 'spectator', userId: string}> => {
  const gameRef = getGameRef(gameId);
  const docSnap = await getDoc(gameRef);

  const tempUserId = localStorage.getItem('chessUserId') || `user_${Date.now()}`;
  localStorage.setItem('chessUserId', tempUserId);

  if (!docSnap.exists()) {
    await createNewGame(gameId, tempUserId, timeControl);
    return { color: 'w', userId: tempUserId};
  }
  
  const gameData = docSnap.data();
  
  if (gameData.white === tempUserId) return { color: 'w', userId: tempUserId };
  if (gameData.black === tempUserId) return { color: 'b', userId: tempUserId };


  if (!gameData.white) {
    await updateDoc(gameRef, { white: tempUserId });
    return { color: 'w', userId: tempUserId };
  } else if (!gameData.black) {
    await updateDoc(gameRef, { black: tempUserId });
    return { color: 'b', userId: tempUserId };
  }
  
  return { color: 'spectator', userId: tempUserId };
};

export const createNewGame = async (gameId: string, userId?: string, timeControl?: number) => {
    const gameRef = getGameRef(gameId);
    const game = new Chess();
    
    const gameData: any = { 
        fen: game.fen(),
        pgn: game.pgn(),
        white: userId || null,
        black: null,
        createdAt: serverTimestamp(),
        lastMoveTimestamp: serverTimestamp(),
        request: null,
        requestingPlayer: null,
        status: 'active',
        lastMove: null,
    };

    if (timeControl) {
      gameData.timeControl = timeControl; // in minutes
      gameData.whiteTime = timeControl * 60 * 1000; // in milliseconds
      gameData.blackTime = timeControl * 60 * 1000;
    }

    await setDoc(gameRef, gameData);
};

export const sendGameRequest = async (gameId: string, type: 'new' | 'end', userId: string) => {
  const gameRef = getGameRef(gameId);
  await updateDoc(gameRef, {
    request: type,
    requestingPlayer: userId,
  });
};

export const clearGameRequest = async (gameId: string) => {
  const gameRef = getGameRef(gameId);
  await updateDoc(gameRef, {
    request: null,
    requestingPlayer: null,
  });
}

export const deleteGame = async (gameId: string) => {
  const gameRef = getGameRef(gameId);
  await deleteDoc(gameRef);
};
