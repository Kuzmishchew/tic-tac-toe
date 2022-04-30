'use strict';

console.log("let's start");
let clickerCheck = true;
let gameMass = [];

function createGameField() {
    let table = document.getElementById("gameField");
    for (let i = 0; i <= 2; i++) {
      let newRow =  table.insertRow(-1);
      for (let j = 0; j <= 2; j++){
        let newCell = newRow.insertCell(-1);
        newCell.id = "cell";
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
    for (let i = 0; i <= 2; i++){
        for (let j = 0; j <= 2; j++){
            resultTab[i].push(gameMass[k]);
            k++;
        }
    }   
    return resultTab;
}

function clickCell(){
    let field = document.querySelectorAll("#cell");
    for (let i = 0; i < field.length; i++) {        
        field[i].addEventListener("click", () => {
            if (gameMass[i] == 0) {
                field[i].style = clicker();
                gameMass[i] = clickerCheck ? 1 : 4;
                clickerCheck = !clickerCheck;
                console.log(checkResult(gameMass));
            }            
        });
        
    }    
}


createGameField();
clickCell();
console.log(gameMass);