function gameBoard (name) {
    const gameBoardName = name;
    let gameBoardSize = []; 
    const getGameBoardSize = () => gameBoardSize
    const setGameBoardSize = (boardSize) => {
        for(let i = 1; i < boardSize*2; i++) {
            gameBoardSize.push(i);
        }
    };
        
    
    return {gameBoardName,getGameBoardSize,setGameBoardSize};
}

function player(name) {
    const playerName = name;
    let playerMark = "";
    let score = 0;
    let columns = [];
    const getPlayerMark = () => playerMark;
    const setPlayerMark = (mark) => playerMark = mark;
    const getScore = () => score;
    const setScore = () => score++;
    const getColumns = () => columns;
    const setColumns = (column) => columns.push(column);

    return {playerName, getPlayerMark, setPlayerMark,getScore,setScore,getColumns,setColumns};
}

function winConditions(player) {
    let win = false;
    if(player.getColumns().includes("1") && player.getColumns().includes("2") && player.getColumns().includes("3")) {
        win = true;
    }else if(player.getColumns().includes("4") && player.getColumns().includes("5") && player.getColumns().includes("6")) {
        win = true;
    }else if(player.getColumns().includes("7") && player.getColumns().includes("8") && player.getColumns().includes("9")) {
        win = true;
    }else if(player.getColumns().includes("1") && player.getColumns().includes("4") && player.getColumns().includes("7")) {
        win = true;
    }else if(player.getColumns().includes("2") && player.getColumns().includes("5") && player.getColumns().includes("8")) {
        win = true;
    }else if(player.getColumns().includes("3") && player.getColumns().includes("6") && player.getColumns().includes("9")) {
        win = true;
    }else if(player.getColumns().includes("7") && player.getColumns().includes("5") && player.getColumns().includes("3")) {
        win = true;
    }else if(player.getColumns().includes("9") && player.getColumns().includes("5") && player.getColumns().includes("1")) {
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

let playerMark = prompt()

