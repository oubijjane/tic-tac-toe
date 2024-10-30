function gameBoard(name) {
    const gameBoardName = name;
    let gameBoardSize = [];
    const getGameBoardSize = () => gameBoardSize
    const setGameBoardSize = (boardSize) => {
        for (let i = 1; i <= boardSize; i++) {
            console.log(i);
            gameBoardSize.push(i);
        }
    };


    return { gameBoardName, getGameBoardSize, setGameBoardSize };
}
const ticTacToe = gameBoard("tic tac toe");
ticTacToe.setGameBoardSize(9);
function player(name) {
    const playerName = name;
    let playerMark = "";
    let skipTurn = false;
    let score = 0;
    let columns = [];
    const getPlayerMark = () => playerMark;
    const setPlayerMark = (mark) => playerMark = mark;
    const getScore = () => score;
    const setScore = () => score++;
    const getColumns = () => columns;
    const setColumns = (column) => columns.push(column);
    const getSkipTurn = () => skipTurn;
    const setSkipTurn = (value) => skipTurn = value;

    return { playerName, getPlayerMark, setPlayerMark, getScore, setScore, getColumns, setColumns, setSkipTurn, getSkipTurn };
}

function winConditions(player) {
    let win = false;
    if (player.getColumns().includes("1") && player.getColumns().includes("2") && player.getColumns().includes("3")) {
        win = true;
    } else if (player.getColumns().includes("4") && player.getColumns().includes("5") && player.getColumns().includes("6")) {
        win = true;
    } else if (player.getColumns().includes("7") && player.getColumns().includes("8") && player.getColumns().includes("9")) {
        win = true;
    } else if (player.getColumns().includes("1") && player.getColumns().includes("4") && player.getColumns().includes("7")) {
        win = true;
    } else if (player.getColumns().includes("2") && player.getColumns().includes("5") && player.getColumns().includes("8")) {
        win = true;
    } else if (player.getColumns().includes("3") && player.getColumns().includes("6") && player.getColumns().includes("9")) {
        win = true;
    } else if (player.getColumns().includes("7") && player.getColumns().includes("5") && player.getColumns().includes("3")) {
        win = true;
    } else if (player.getColumns().includes("9") && player.getColumns().includes("5") && player.getColumns().includes("1")) {
        win = true;
    }
    return win;
}
let playerName = prompt("player 1 name:");
const player1 = player(playerName);
console.log(player1);

playerName = prompt("player 2 name:");
const player2 = player(playerName);
console.log(player2);

let playerMark = prompt("choose your mark(X or O):");
player1.setPlayerMark(playerMark);
if (player1.getPlayerMark() === "x") {
    player2.setPlayerMark("o");
} else {
    player2.setPlayerMark("x");
}
console.log(player1.getPlayerMark());
console.log(player2.getPlayerMark());


function turn(player) {
    let column = prompt(player.playerName + " choose your column:")
    let i = ticTacToe.getGameBoardSize().indexOf(parseInt(column));
    if (i != -1) {
        ticTacToe.getGameBoardSize().splice(i,1);   
        player.setColumns(column);
    }
    else if (column === "stop") {
        return "stop";
    }
    else {
        console.log("hello");
        return "skip";
    }
    if (winConditions(player)) {
        console.log(`${player.playerName} is won`);
        player.setScore();
        console.log(`${player.playerName} score: ${player.getScore()} ${player2.playerName} score: ${player2.getScore()}`)
        return "win";
    }
    if(ticTacToe.getGameBoardSize().length === 0) {
        console.log("game finished no more columns");
        return "finished";
    }

}

function game() {
    while (true) {
        let x;
        let o;
        if (!player1.getSkipTurn()) {
            x = turn(player1);
            if (x === "stop" || x === "finished" || x === "win") {
                break;
            }
            if (x === "skip") {
                player2.setSkipTurn(true);
            } else {
                player2.setSkipTurn(false);
            }
        }
        if (!player2.getSkipTurn()) {
            o = turn(player2);
            if (o === "stop" || o === "finished" || o === "win") {
                break;
            }
            if (o === "skip") {
                player1.setSkipTurn(true);
            } else {
                player1.setSkipTurn(false);
            }
        }
    }


    /* while (turn(player1) != "stop" || turn(player2) != "stop" ) {
        if (turn(player1) === "stop" || turn(player2) === "stop") {
            break;
        } if (turn(player1) === "skip" ) {
            player2.setSkipTurn(true);
        }
        if (turn(player2) === "skip" ) {
            player1.setSkipTurn(true);
        }
        if (!player1.getSkipTurn) {
            turn(player1);
            player1.setSkipTurn(false);
        } if (!player2.getSkipTurn) {
            turn(player2);
            player1.setSkipTurn(false);
        }
    } */
}
game();


