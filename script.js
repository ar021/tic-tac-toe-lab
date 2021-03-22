let clickCount = 0;
const winCombination = [6,15,21,12,18];
const player1 = [];
const player2 = [];

//Cached Element

let gameBoard = document.querySelector(".gameBoard");
const resetEl = document.querySelector(".reset");

// console.log(gameBoard);

gameBoard.addEventListener("click", function(ev){
    if(clickCount%2 === 0 && clickCount<9){
        addX(ev);
        const pl1 = parseInt(ev.target.classList[2]);
        player1.push(pl1);
        console.log(player1);
        win();
    }
    else if (clickCount%2 !== 0 && clickCount<9){
        addO(ev);
        const pl2 = parseInt(ev.target.classList[2]);
        player2.push(pl2);
        console.log(player2);
        win();
    }
    return;
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

function win(){
    if(clickCount>= 3){
    const score1 = player1.reduce(sum);
    const score2 = player2.reduce(sum);
    console.log(score1);
    console.log(score2);
        if(winCombination.includes(score1)){
            console.log("player 1 won");
        }
        else if(winCombination.includes(score2)){
            console.log("player 2 won");
        }
        return;
    }
    return;
}
function reset(){
   var dText = document.querySelectorAll(".item");
    // console.log(dText);
    dText.forEach(function(e){
        e.innerText = "";
    });
    clickCount=0;
}

function sum(acc, num){
    acc = acc+num;
    return acc;
  }

