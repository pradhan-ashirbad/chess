# **App Name**: Web Chess Arena

## Core Features:

- Multi-Device Play: Enable the game to be played by 2 players with two different devices.
- Board Initialization: Initialize the chessboard with the standard chess starting position.
- Drag and Drop Piece Movement: Enable users to drag and drop chess pieces to move them on the board. also player can select the piece and the higlighted lega square they can put the piece
- Legal Move Validation: Validate whether a move is legal according to chess rules (including pawn movement, castling, en passant, and pawn promotion).
- Move Highlighting: Highlight available legal moves for a selected piece.
- Turn Management: Display whose turn it is (White or Black) and automatically switch turns after each move.
- Check and Checkmate Detection: Detect check and checkmate conditions, ending the game when checkmate occurs. When checkmate is detected, provide feedback in the UI, along with an option to begin a new game.
- Undo Move: Allow players to undo their last move.
- New Game: Implement a button to reset the game to the initial state.

## Style Guidelines:

- Primary color: Warm beige (#F0D9B5) for light squares on the chessboard.
- Background color: Light beige (#E8D1AD), emulating the chessboard's color scheme (20% desaturation)
- Accent color: Burnt umber (#A37651), a dark accent that provides visual interest (approximately 30 degrees to the 'left' of beige) for highlights and interactive elements.
- Body and headline font: 'Inter', a grotesque-style sans-serif, is appropriate for both headlines and body text because of its objective and neutral appearance.
- Use a consistent and minimalist icon set for actions like 'Undo' and 'New Game'.
- Clean and centered layout, with the chessboard taking center stage. Use a sidebar for move history (optional).
- Subtle animations for piece movements and move highlighting.