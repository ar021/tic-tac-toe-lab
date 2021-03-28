
let clickCount = 0;
// const winCombination = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
const player1 = [];
const player2 = [];
let score1=0;
let score2=0;

//Cached Element

let gameBoard = document.querySelector(".gameBoard");
const resetEl = document.querySelector(".reset");
const gameBox = document.querySelectorAll(".item");
const nextPlayer = document.querySelector('.next-player');
const winnerPlayer = document.querySelector('.winner-banner');

// console.log(gameBoard);

gameBoard.addEventListener("click", function(ev){
    if(ev.target.classList[3]){
        return;
    }
    else {
        if(clickCount%2 === 0 && clickCount<9){
            addX(ev);
            ev.target.classList.add('X');
            player1.push('X');
            checkGameStatus();
            nextPlayer.innerHTML = 'Next Turn : O';
        }
        else if (clickCount%2 !== 0 && clickCount<9){
            addO(ev);
            ev.target.classList.add('O');
            player2.push('O');
            checkGameStatus();
            nextPlayer.innerHTML = 'Next Turn : X';
        }
        return;
    }
   
});

resetEl.addEventListener("click", function(ev){
    reset();
});

function addX (ev){
    ev.target.innerText = "X";
    clickCount = clickCount+1;
    // console.log(clickCount);
};
function addO (ev){
    ev.target.innerText = "O";
    clickCount = clickCount+1;
    // console.log(clickCount);
};

function reset(){
   
    gameBox.forEach(function(box){
        box.innerText = "";
        box.classList.remove('X');
        box.classList.remove('O');
        
    });
    clickCount=0;
    player1.length = 0;
    player2.length = 0;
    score1=0;
    score2=0;
    nextPlayer.innerHTML = 'Next Turn : X';
    winnerPlayer.innerHTML = '';

}

function sum (acc, num){
    acc = acc+num;
    return acc;
}

// function win(){
//     for(let i=0; i<winCombination.length; i++){   
//          if(gameBox[winCombination[i][0]].classList[3] && gameBox[winCombination[i][0]].classList[3] === gameBox[winCombination[i][1]].classList[3] && 
//             gameBox[winCombination[i][1]].classList[3] === gameBox[winCombination[i][2]].classList[3] ){
//             console.log(gameBox[winCombination[i][0]].classList[3]);
//         }
//     else {
//         return;
//         }
//     };
    
// };
function checkGameStatus(){
    const topLeft = gameBox[0].classList[3];
    const topMiddle = gameBox[1].classList[3];
    const topRight = gameBox[2].classList[3];
    const middleLeft = gameBox[3].classList[3];
    const middleMiddle = gameBox[4].classList[3];
    const middleRight = gameBox[5].classList[3];
    const bottomLeft = gameBox[6].classList[3];
    const bottomMiddle = gameBox[7].classList[3];
    const bottomRight = gameBox[8].classList[3];
  
    // check winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
      winner(topLeft);
    } 
    else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        winner(middleLeft);  
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        winner(bottomLeft);
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        winner(topLeft);
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        winner(topMiddle);
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        winner(topRight);
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        winner(topLeft);
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        winner(topRight);
    }
    else if(clickCount === 9){
        winnerPlayer.innerHTML = 'Game Tie!!';
    }
    return;
};

function winner(winner, ev){
    winnerPlayer.innerHTML = `Player ${winner} is Winner`;
    gameBox.forEach(function(box){
        box.innerText = winner;  
        box.classList.add(winner);
    });

}