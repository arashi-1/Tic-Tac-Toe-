let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;
const winPatterns =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,5,4],[6,7,8]];
boxes.forEach((box)=>{
    box.addEventListener("click" , () => {
        if(turnO){
            box.innerText ="O";
            box.style.color = "black";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color = "#b0413e";
            turnO= true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count == 9 && !isWinner){
            msg.innerText = `Draw`;
            msgContainer.classList.remove("hide");
            disableBoxes();
        }
    });
});
const checkWinner = () => {
    for(let pattern of winPatterns){ 
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);               
            }          
        }
    }
};
const showWinner = (winner) => {
    msg.innerText= `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for(let box of boxes ) {
        box.disabled = true;
    }
}

const eableBoxes = () => {
    for(let box of boxes ) {
        box.disabled = false;
        box.innerText ="";
    }
};
const resetGame = () => {
    turnO = true;
    count=0;
    eableBoxes();
    msgContainer.classList.add("hide");
};
newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);


