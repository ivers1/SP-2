//Gameboard

function gameBoard(width, height) {
  this.width = width;
  this.height = height;
  this.chartBoard = [];

  for (var i = 0; i < this.width; i++) {
    const row = [];
    this.chartBoard.push(row);
    for (var j = 0; j < this.height; j++) {
      const col = {};
      row.push(col);
    }
  }
}

gameBoard.prototype.drawBoard = function() {
  for (var i = 0; i < this.width; i++) {
    for (var j = 0; j < this.height; j++) {
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.strokeRect(j * 80, i * 80, 80, 80);
      ctx.closePath();
    }
  }
};

let board = new gameBoard(100, 100);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

board.drawBoard();

var score = 0;
var players = [player1, player2];
var turn = 0;


//Game dice

function rollDice() {
    var pDice = document.getElementById("playerDice");
    var status = document.getElementById("status");
 
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    
    playerDice.innerHTML = d1;
    status.innerHTML = "Dice shows a " + diceTotal;
    
  
  }
