var player = "X"; // 0 for X, 1 for O
function CreateGame() {
    const gameBoard = document.createElement("div");
    gameBoard.id = "gameBoard";
    gameBoard.style.display = "grid";
    gameBoard.style.gridTemplateColumns = "repeat(3, 100px)";
    gameBoard.style.gridGap = "5px";

    for (var i = 0; i < 9; i++) {
        var cell = document.createElement("button");
        cell.onclick = function() { OnClick(this); };
        cell.id = "cell" + i;
        cell.innerHTML = "";
        cell.style.width = "100px";
        cell.style.height = "100px";
        cell.style.backgroundColor = "white";
        cell.style.border = "1px solid black";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        gameBoard.appendChild(cell);
    }

    document.body.appendChild(gameBoard);

    const status = document.createElement("div");
    status.id = "status";
    status.innerHTML = "X's turn";
    status.style.marginTop = "10px";
    document.body.appendChild(status);
}
function OnClick(cell) {
    if (cell.innerHTML != "") {
        return;
    }
    id = cell.id;
    cell.innerHTML = player;
    if (player == "X") {
        cell.style.backgroundColor = "lightblue";
        player = "O";
        UpdateState();
    }
    else {
        cell.style.backgroundColor = "lightgreen";
        player = "X";
        UpdateState();
    }
    
}
function UpdateState() {
    document.getElementById("status").innerHTML = player + "'s turn";
    gameBoard = document.getElementById("gameBoard");
    var cells = gameBoard.childNodes;
    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != "") {
        alert(cells[0].innerHTML + " wins!");
        
        return;
    }
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != "") {
        alert(cells[3].innerHTML + " wins!");
        
        return;
    }
    if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != "") {
        alert(cells[6].innerHTML + " wins!");
        
        return;
    }
    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != "") {
        alert(cells[0].innerHTML + " wins!");
        
        return;
    }
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != "") {
        alert(cells[1].innerHTML + " wins!");
        
        return;
    }
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != "") {
        alert(cells[2].innerHTML + " wins!");
        
        return;
    }
    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != "") {
        alert(cells[0].innerHTML + " wins!");
        
        return;
    }
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != "") {
        alert(cells[2].innerHTML + " wins!");
        
        return;
    }
    ResetGame();
    }
    function ResetGame() {
    var cells = document.getElementById("gameBoard").childNodes;
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
        cells[i].style.backgroundColor = "white";
    }
    player = "X";
    document.getElementById("status").innerHTML = player + "'s turn";
    CreateGame();
    document.getElementById("gameBoard").remove();
    }


CreateGame();