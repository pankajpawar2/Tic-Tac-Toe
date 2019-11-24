

// Variable declaration 

let gameStartBtn = document.querySelector('#start-btn');

let gameReplaybtn = document.getElementById('replay-btn');

let gridItem = document.querySelectorAll('.game-console div');

let player1,player2,color1,color2;

// Adding event listener for Button to Start Game

gameStartBtn.addEventListener('click', function(event)
{

  event.preventDefault();

  // Getting some user input through prompt
  
    player1 = prompt("Enter name of player 1") || 'Player 1';
    color1 = prompt(`Welcome ${player1}. Enter your favorite colour`);
    player2 = prompt("Enter name of player 2") || 'Player 2';
    color2 = prompt(`Welcome ${player2}. Enter your favorite colour`);

  // Creating a "P" element to display some message - "Allright.... Lets do this. Player It's your turn."

  let startGame = document.createElement('p');
  startGame.innerHTML = `<h3>Allright.... Lets do this. ${player1.fontcolor(color1)} It's your turn.</h3>`;
  
  // Appending the p element to parent div. Also, removing/hiding the Game start button & displaying the game console grid

  document.querySelector('.game-info').appendChild(startGame);
  document.querySelector('h1').removeChild(gameStartBtn);
  document.querySelector('.game-console').style.display = 'grid'
  
})


// Variable i is declared just to keep track of whose turn it is

let i = 0;

// Iterating through each div inside Main grid 

for(item of gridItem)
{


  item.addEventListener('click', function(event)
  {
    
    event.preventDefault();

    if(i%2 === 0)
    {
      event.target.textContent = "X";
      event.target.style.background = color1 || 'grey';
      document.querySelector('p').innerHTML = ``;
      i++;     
    }

    else
    {
      event.target.textContent = "O";  
      event.target.style.background = color2 || 'lightgrey';
      document.querySelector('p').innerHTML = ``;
      i++;
    }

    let myParagraph = document.querySelector('p');
    
    
    if(gridItem[0].textContent === 'X' && gridItem[1].textContent === 'X' && gridItem[2].textContent === 'X' || 
    gridItem[3].textContent === 'X' && gridItem[4].textContent === 'X' && gridItem[5].textContent === 'X' ||
    gridItem[6].textContent === 'X' && gridItem[7].textContent === 'X' && gridItem[8].textContent === 'X' ||
    gridItem[0].textContent === 'X' && gridItem[3].textContent === 'X' && gridItem[6].textContent === 'X' ||
    gridItem[1].textContent === 'X' && gridItem[4].textContent === 'X' && gridItem[7].textContent === 'X' || 
    gridItem[2].textContent === 'X' && gridItem[5].textContent === 'X' && gridItem[8].textContent === 'X' ||
    gridItem[0].textContent === 'X' && gridItem[4].textContent === 'X' && gridItem[8].textContent === 'X' ||
    gridItem[2].textContent === 'X' && gridItem[4].textContent === 'X' && gridItem[6].textContent === 'X'
    )
    {
      if(myParagraph.innerHTML == false)
      {
      myParagraph.innerHTML = `<h2>Game over. ${player1.fontcolor(color1)} wins.</h2>`;
      gameReplaybtn.style.display = 'block';
      }
    }

    else if(gridItem[0].textContent === 'O' && gridItem[1].textContent === 'O' && gridItem[2].textContent === 'O' || 
    gridItem[3].textContent === 'O' && gridItem[4].textContent === 'O' && gridItem[5].textContent === 'O' ||
    gridItem[6].textContent === 'O' && gridItem[7].textContent === 'O' && gridItem[8].textContent === 'O' ||
    gridItem[0].textContent === 'O' && gridItem[3].textContent === 'O' && gridItem[6].textContent === 'O' ||
    gridItem[1].textContent === 'O' && gridItem[4].textContent === 'O' && gridItem[7].textContent === 'O' || 
    gridItem[2].textContent === 'O' && gridItem[5].textContent === 'O' && gridItem[8].textContent === 'O' ||
    gridItem[0].textContent === 'O' && gridItem[4].textContent === 'O' && gridItem[8].textContent === 'O' ||
    gridItem[2].textContent === 'O' && gridItem[4].textContent === 'O' && gridItem[6].textContent === 'O')
    {
      if(myParagraph.innerHTML == false)
      {
      myParagraph.innerHTML = `<h2>Game over. ${player2.fontcolor(color2)} wins.</h2>`;
      gameReplaybtn.style.display = 'block';
      }
    }

    if(gridItem[0].textContent && gridItem[1].textContent && gridItem[2].textContent && gridItem[3].textContent && gridItem[4].textContent && gridItem[5].textContent && gridItem[6].textContent && gridItem[7].textContent && gridItem[8].textContent)
    {
      
      if(myParagraph.innerHTML == false)
      {
        for(values of gridItem)
        {
          values.innerHTML = `&#128564;`
        }

        myParagraph.innerHTML = `<h2>Game over. Its a draw.</h2>`;
        gameReplaybtn.style.display = 'block';
        
      }
      
    }
    
  }, {once:true})

}

document.getElementById('replay-btn').addEventListener('click', function(event)
{
  event.preventDefault();
 
  document.location.reload();
})

