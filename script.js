

/*
let gameboardData = new Array(9);
let gamePlay = true;
let msg = document.getElementById('message');
const restart = document.getElementById('restart-button');
const gameboard = document.querySelector('.gameboard');
const fields = document.querySelectorAll('.field');
let move = "X";

function renderBoard()
{
let counter=0;
  fields.forEach((item)=>{

    item.textContent = gameboardData[counter];
    counter++;
   })
  }

function changeMove(move)
{
  if(move==="X")
   return "O";
  else
  return "X";
}

function fillGameBoard(index)
{
gameboardData[index] = move;
renderBoard();
}

function checkWin(move)
{

  for(let i=0;i<=6;i=i+3)
  {
    if(gameboardData[i]===move && gameboardData[i+1]===move && gameboardData[i+2]===move)
    return true;
  }
 
for(let i=0;i<=2;i++)
{
  if(gameboardData[i]===move && gameboardData[i+3]===move && gameboardData[i+6]===move)
  return true;
}

  if(gameboardData[0]===move && gameboardData[4]===move && gameboardData[8]===move)
    return true;

    if(gameboardData[2]===move && gameboardData[4]===move && gameboardData[6]===move)
    return true;

    return false;
}


function isFull()
{
  for(let i=0;i<gameboardData.length;i++)
  {
    if(gameboardData[i]===undefined)
    return false;
  }
  return true;
}

gameboard.addEventListener('click',(e)=>{

  if(gamePlay===true)
  {
  const index = parseInt(e.target.getAttribute('data-index'));

  if(gameboardData[index]===undefined)
  {
  fillGameBoard(index);

    if(checkWin(move))
    {
     msg.textContent = move+ " has won";
      gamePlay = false;
      return;
    }

    if(isFull())
    {
      gamePlay = false;
      msg.textContent = "Draw";
      return;
    }

  move = changeMove(move);
  msg.textContent = "Player "+move+"'s turn";
  }
  }
})

restart.addEventListener('click',(e)=>{
  gameboardData.fill(undefined);
  gamePlay=true;
  msg.textContent = "Player X's turn";
  move = "X";
  renderBoard();

})




*/


//let msg = document.getElementById('message');
const restart = document.getElementById('restart-button');
const grid = document.querySelector('.gameboard');
const fields = document.querySelectorAll('.field');

class gameboard
 {
  constructor() 
  {
    this.gameboardData = new Array(9);
    this.gamePlay = true;
    this.move = "X";
    this.msg = document.getElementById('message');
   

    this.renderBoard = function()
  {
  let counter=0;
    fields.forEach((item)=>{
  
      item.textContent = this.gameboardData[counter];
      counter++;
     })
    };
  
  this.changeMove = function()
  {
    if(this.move==="X")
     this.move="O";
    else
    this.move = "X"; 
  };
  
   this.fillGameBoard = function(index)
  {
  this.gameboardData[index] = this.move;
  this.renderBoard();
  };
  
   this.checkWin = function()
  {
  
    for(let i=0;i<=6;i=i+3)
    {
      if(this.gameboardData[i]===this.move && this.gameboardData[i+1]===this.move && this.gameboardData[i+2]===this.move)
      return true;
    }
   
  for(let i=0;i<=2;i++)
  {
    if(this.gameboardData[i]===this.move && this.gameboardData[i+3]===this.move && this.gameboardData[i+6]===this.move)
    return true;
  }
  
    if(this.gameboardData[0]===this.move && this.gameboardData[4]===this.move && this.gameboardData[8]===this.move)
      return true;
  
      if(this.gameboardData[2]===this.move && this.gameboardData[4]===this.move && this.gameboardData[6]===this.move)
      return true;
  
      return false;
  };
  
  
   this.isFull = function()
  {
    for(let i=0;i<this.gameboardData.length;i++)
    {
      if(this.gameboardData[i]===undefined)
      return false;
    }
    return true;
  };


  }
}

let newGame = new gameboard();


grid.addEventListener('click',(e)=>{

  if(newGame.gamePlay===true)
  {
  const index = parseInt(e.target.getAttribute('data-index'));

  if(newGame.gameboardData[index]===undefined)
  {
  newGame.fillGameBoard(index);

    if(newGame.checkWin())
    {
     newGame.msg.textContent = newGame.move+ " has won";
      newGame.gamePlay = false;
      return;
    }

    if(newGame.isFull())
    {
      newGame.gamePlay = false;
      newGame.msg.textContent = "Draw";
      return;
    }

  newGame.changeMove();
  newGame.msg.textContent = "Player "+newGame.move+"'s turn";
  }
  }
})

restart.addEventListener('click',(e)=>{
 
  newGame = new gameboard();
  newGame.renderBoard();
  newGame.msg.textContent = "Player X's turn";
})