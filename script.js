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
//let playerName = prompt("player 1 name:");
//const player1 = player(playerName);
//console.log(player1);

//playerName = prompt("player 2 name:");
//const player2 = player(playerName);
//console.log(player2);

//let playerMark = prompt("choose your mark(X or O):");
/* player1.setPlayerMark(playerMark);
if (player1.getPlayerMark() === "x") {
    player2.setPlayerMark("o");
} else {
    player2.setPlayerMark("x");
}
console.log(player1.getPlayerMark());
console.log(player2.getPlayerMark());
 */

function turn(player) {
    // let column = prompt(player.playerName + " choose your column:")
    let i = ticTacToe.getGameBoardSize().indexOf(parseInt(column));
    if (i != -1) {
        ticTacToe.getGameBoardSize().splice(i, 1);
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
    if (ticTacToe.getGameBoardSize().length === 0) {
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
}


function startGame() {
    const form = document.createElement("form");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.setAttribute("class", "createBoard");
    btn.textContent = "start the game";

    p.textContent = "player 1 mark:";

    const lable1 = document.createElement("lable");
    const nameInput1 = document.createElement("input");
    lable1.textContent = "player 1 name:";
    lable1.setAttribute("for", "player1Name");
    nameInput1.setAttribute("id", "player1Name");
    nameInput1.setAttribute("type", "text");

    const lable2 = document.createElement("lable");
    const nameInput2 = document.createElement("input");
    lable2.textContent = "player 2 name:";
    lable2.setAttribute("for", "player1Name");
    nameInput2.setAttribute("id", "player1Name");
    nameInput2.setAttribute("type", "text");

    const lable3 = document.createElement("lable");
    const nameInput3 = document.createElement("input");
    lable3.textContent = "X";
    lable3.setAttribute("for", "markX");
    nameInput3.setAttribute("id", "markX");
    nameInput3.setAttribute("type", "radio");
    nameInput3.setAttribute("name", "mark");

    const lable4 = document.createElement("lable");
    const nameInput4 = document.createElement("input");
    lable4.textContent = "O";
    lable4.setAttribute("for", "markO");
    nameInput4.setAttribute("id", "marko");
    nameInput4.setAttribute("type", "radio");
    nameInput4.setAttribute("name", "mark");

    div1.appendChild(lable1);
    div1.appendChild(nameInput1);
    div2.appendChild(lable2);
    div2.appendChild(nameInput2);
    div3.appendChild(p);
    div3.appendChild(lable3);
    div3.appendChild(nameInput3);
    div3.appendChild(lable4);
    div3.appendChild(nameInput4);
    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(btn);
    const body = document.querySelector("body");
    body.appendChild(form);
}

function createBoard () {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.className ="wraper";
    for(let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        div.appendChild(cell);
    }
    body.appendChild(div);
}
function eventHandling() {
    const body = document.querySelector("body");
    const btn = document.querySelector("button");
    body.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.className === "start") {
            startGame();
            e.target.remove();
        }
        if (e.target.className === "createBoard") {
            createBoard();
            document.querySelector("form").remove();
        }
    })
}


eventHandling();


