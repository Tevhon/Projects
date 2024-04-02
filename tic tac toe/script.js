let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".reset-game");
let newGame = document.querySelector(".new-game");
let msgContainer = document.querySelector(".winner-msg");
let msg = document.querySelector(".msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText ="0";
            turn0 = false;
        }else{
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const disableBoxes =() =>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes =() =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(Winner) =>{
    msg.innerText = `Congratulations, winner is ${ Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =() =>{
    for (let pattern of winPatterns) {
       
        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                showWinner(pos1val)
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);
