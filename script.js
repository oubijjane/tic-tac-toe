function gameBoard(name) {
    const gameBoardName = name;
    let gameBoardSize = [];
    const getGameBoardSize = () => gameBoardSize
    const setGameBoardSize = (boardSize) => {
        let board = [];
        for (let i = 1; i <= boardSize; i++) {
            console.log(i);
            board.push(i);
        }
        gameBoardSize = board;
    };


    return { gameBoardName, getGameBoardSize, setGameBoardSize };
}
const ticTacToe = gameBoard("tic tac toe");
ticTacToe.setGameBoardSize(9);
function player() {
    let playerName = "";
    let playerMark = "";
    let skipTurn = false;
    let score = 0;
    let columns = [];
    const getPlayerMark = () => playerMark;
    const setPlayerMark = (mark) => playerMark = mark;
    const getPlayerName = () => playerName;
    const setPlayerName = (pName) => playerName = pName;
    const getScore = () => score;
    const setScore = () => score++;
    const getColumns = () => columns;
    const setColumns = (column) => columns.push(column);
    const reset = () => columns = [];
    const getSkipTurn = () => skipTurn;
    const setSkipTurn = (value) => skipTurn = value;

    return { getPlayerName, setPlayerName, getPlayerMark, setPlayerMark, getScore, setScore, getColumns, setColumns, setSkipTurn, getSkipTurn , reset};
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

function turn(player, column) {
    // let column = prompt(player.playerName + " choose your column:")
    let i = ticTacToe.getGameBoardSize().indexOf(parseInt(column));
    if (i != -1) {
        ticTacToe.getGameBoardSize().splice(i, 1);
        player.setColumns(column);
    }
    else {
        console.log("hello");
        player.setSkipTurn(true);
    }
    if (winConditions(player)) {
        console.log(`${player.playerName} is won`);
        player.setScore();
        console.log(`${player.playerName} score: ${player.getScore()}`)
        return "win";
    }
    if (ticTacToe.getGameBoardSize().length === 0) {
        console.log("game finished no more columns");
        return "finished";
    }

}

function game(player1, player2, element) {
    let p1;
    let p2;
    if (!player1.getSkipTurn() && !(element.textContent === "X" || element.textContent === "O")) {
        p1 = turn(player1, element.id);
        element.textContent = player1.getPlayerMark();
        player1.setSkipTurn(true);
        player2.setSkipTurn(false);
        if (p1 === "stop" || p1 === "finished" || p1 === "win") {
            return "finished";
        } else if (p1 === "win" || p2 === "win") {
            return true;
        }
    }
    if (!player2.getSkipTurn() && !(element.textContent === "X" || element.textContent === "O")) {
        p2 = turn(player2, element.id);
        element.textContent = player2.getPlayerMark();
        player2.setSkipTurn(true);
        player1.setSkipTurn(false);
        if (p2 === "stop" || p2 === "finished" || p2 === "win") {
            return "finished";
        }else if (p1 === "win" || p2 === "win") {
            return true;
        }
        

    }
    return false;
}
function players() {
    const player1 = player();
    const player2 = player();
    return { player1, player2 };
}

function displayController() {
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
    lable2.setAttribute("for", "player2Name");
    nameInput2.setAttribute("id", "player2Name");
    nameInput2.setAttribute("type", "text");

    const lable3 = document.createElement("lable");
    const nameInput3 = document.createElement("input");
    lable3.textContent = "X";
    lable3.setAttribute("for", "markX");
    nameInput3.setAttribute("id", "markX");
    nameInput3.setAttribute("type", "radio");
    nameInput3.setAttribute("name", "mark");
    nameInput3.setAttribute("value", "X");

    const lable4 = document.createElement("lable");
    const nameInput4 = document.createElement("input");
    lable4.textContent = "O";
    lable4.setAttribute("for", "markO");
    nameInput4.setAttribute("id", "marko");
    nameInput4.setAttribute("type", "radio");
    nameInput4.setAttribute("name", "mark");
    nameInput4.setAttribute("value", "O");



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

function createBoard() {
    const body = document.querySelector("body");
    const div1 = document.createElement("div");
    const div = document.createElement("div");
    div.className = "wraper";
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("id", i + 1);
        div.appendChild(cell);
    }
    div1.className = "score";
    body.appendChild(div1);
    body.appendChild(div);

}
function eventHandlingContoller() {
    const body = document.querySelector("body");
    const btn = document.querySelector("button");
    const player1 = player();
    const player2 = player();
    body.addEventListener("click", (e) => {
        if (e.target.className === "createBoard") {
            e.preventDefault();
        }
        if (e.target.className === "start") {
            displayController();
            e.target.remove();
        }
        if (e.target.className === "createBoard") {
            const player1Name = document.querySelector("input[id = player1Name]");
            const player2Name = document.querySelector("input[id = player2Name]");
            const playerMark = document.querySelector('input[name = mark]:checked')
            player1.setPlayerName(player1Name.value);
            player1.setPlayerMark(playerMark.value);
            if (playerMark.value === "X") {
                player2.setPlayerMark("O");
            } else {
                player2.setPlayerMark("X");
            }
            player2.setPlayerName(player2Name.value);


            console.log(player2.getPlayerMark() + " " + player1Name.value + player1.getPlayerMark());

            createBoard();
            const div = document.querySelector(".score");
            div.textContent = `${player1.getPlayerName()}: ${player1.getScore()} ${player2.getPlayerName()}: ${player2.getScore()}`;
           
            document.querySelector("form").remove();
        }
        if (e.target.className === "cell") {
            let result = game(player1, player2, e.target);
            const div = document.querySelector(".score");
            div.textContent = `${player1.getPlayerName()}: ${player1.getScore()} ${player2.getPlayerName()}: ${player2.getScore()}`;
            console.log(`${player1.getPlayerName()} ${player1.getColumns()} ${player2.getPlayerName()} ${player2.getColumns()} board ${ticTacToe.getGameBoardSize()}`);
            if(result) {
                document.querySelector(".wraper").remove();
                createBoard();
                player1.reset();
                player1.setSkipTurn(false);
                player1.setSkipTurn(false);
                player2.reset();
                ticTacToe.setGameBoardSize(9);
            }
        }
    })
}


eventHandlingContoller();


