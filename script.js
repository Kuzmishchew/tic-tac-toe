'use strict';

console.log("let's start");
let clickerCheck = true;
let gameMass = [];
let result = document.getElementById("result");
let againButton = document.getElementById("again");

function createGameField() {
    let table = document.getElementById("gameField");
    for (let i = 0; i <= 2; i++) {
      let newRow =  table.insertRow(-1);
      if (i == 0 || i == 1) {
        newRow.style = "border-bottom: 5px solid black";
      }
      for (let j = 0; j <= 2; j++){
        let newCell = newRow.insertCell(-1);
        newCell.id = "cell";
        if (j == 0 || j == 1) {
            newCell.style = "border-right: 5px solid black";
        }
        gameMass.push(0);
        }
    } 
}

function clicker() {
    let cross = "background-image: url(/img/cross.png)";
    let zero = "background-image: url(/img/zero.png)";
    if (clickerCheck) {
       return cross;
    } else {
       return zero; 
    }
}

function checkResult(gameMass) {
    let resultTab = [[],[],[]];
    let k = 0;
    let result = false;

    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            resultTab[i].push(gameMass[k]);
            k++;
        }
    }
    
    for (let i = 0; i <= 2; i++) {
        if (resultTab[i][0] == resultTab[i][1] && resultTab[i][0] == resultTab[i][2] && resultTab[i][0] != 0) {
            return resultTab[i][0];
        }
    }
    for (let i = 0; i <= 2; i++) {
        if (resultTab[0][i] == resultTab[1][i] && resultTab[0][i] == resultTab[2][i] && resultTab[0][i] != 0) {
            return resultTab[0][i];
        }
    }

    if (resultTab[0][0] == resultTab[1][1] && resultTab[0][0] == resultTab[2][2] && resultTab[0][0] != 0) {
        return resultTab[0][0];
    }
    if (resultTab[0][2] == resultTab[1][1] && resultTab[0][2] == resultTab[2][0] && resultTab[0][2] != 0) {
        return resultTab[0][2];
    }

    for (let i = 0; i < gameMass.length; i++){
       if (gameMass[i] == 0) {
           result = true;
       }
    }

    if (!result) {
        return 3;
    }
    
}

function winAction(){
    if (checkResult(gameMass) == 1) {
        result.innerHTML = "Победили Крестики!";
        againButton.style.display = "block";
    } else if (checkResult(gameMass) == 2) {
        result.innerHTML = "Победили Нолики!";
        againButton.style.display = "block";
    } else if (checkResult(gameMass) == 3) {
        result.innerHTML = "Ничья!";
        againButton.style.display = "block";
    }
}

function again(){
    let field = document.querySelectorAll("#cell");
    for (let i = 0; i < field.length; i++) {
        field[i].style = "background-color: white";
        gameMass[i] = 0;
    }  
    againButton.style.display = "none"; 
    result.innerHTML = "";  
}

function clickCell(){
    let field = document.querySelectorAll("#cell");
    for (let i = 0; i < field.length; i++) {        
        field[i].addEventListener("click", () => {
            if (gameMass[i] == 0) {
                field[i].style = clicker();
                gameMass[i] = clickerCheck ? 1 : 2;
                clickerCheck = !clickerCheck;
            }    
            winAction();
            
        });
        
    }    
}

againButton.onclick = again;
createGameField();
clickCell();
console.log(gameMass);