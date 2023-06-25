console.log("Welcome to the Tic Tac Toe");
let music = new Audio("music.mp3");
let turn1 = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gameover1 = false;
let turn = "X"
let happy = new Audio("happy.mp3");

// Function to change the turn 
const changeTurn = () => 
{
    return turn === 'X'? '0' : 'X'
}

//Function to check  for a win 
const checkWin = () => {
    let boxtext  = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -1.5, 5, 0],
        [0, 3, 6, -11.5, 15, 90],
        [0, 4, 8, -1.5, 15, 45],
        [3, 4, 5, -1.5, 15, 0],
        [1, 4, 7, -1.5, 15, 90],
        [2, 4, 6, -1.5, 15, 135],
        [6, 7, 8, -1.5, 25, 0],
        [2, 5, 8, 8.5, 15, 90]
    ];
    
    wins.forEach(e => { 
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  WON"
            gameover1 = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '150px';
            document.querySelector(".line").style.transform = ` translate(${e[3]}vw , ${e[4]}vw) rotate( ${e[5]}deg)`
            document.querySelector('.line').style.width = "30vw"
            happy.play();
        }
    })
}


// Main Logic 
// music.play();
let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn1.play();
            checkWin();
            if(!gameover1){
            document.getElementsByClassName("info")[0].innerHTML = "turn for "+ turn
            }
        }
    })
})


// Reset

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    // turn = " X ";
    gameover1 = false
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.line').style.width = "0vw"
    happy.pause();



})
