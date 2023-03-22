/*
for(i = 0; i < 5; i++){

let choice = prompt("Please enter your hand", );

console.log(choice)}
*/


let pscore=0;
let cscore=0;


function playround(a,b){
    if(a == "rock" && b == "scissors" || a == "paper" && b == "rock" || a == "scissors" && b == "paper"){
        console.log(a,b)
        pscore++
        return "player win"
    }else if(b == "rock" && a == "scissors" || b == "paper" && a == "rock" || b == "scissors" && a == "paper"){
        console.log(a,b)
        cscore++
        return "computer win"
    }else{ 
        console.log(a,b)
        return "draw"
        
    }
   
}


function getComputerChoice(){
        let a = Math.floor(Math.random() * 3); 
        if(a==0){
            return "rock"
        
        }else if(a == 1){
            return "scissors"
        }else if(a ==2){return "paper"}
        }
function game(){
      

    
    for(i = 0; i < 5; i++){
    
    let computer = getComputerChoice();
         
        
    let choice = prompt("Please enter your hand", );

    console.log(playround(choice,computer))
    console.log("player",pscore,"comp",cscore)
    }
}
game()