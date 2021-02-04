//show user pick in body
document.getElementById("rock").addEventListener("click", function (){
   document.getElementById("you-pick").innerHTML = "[rock]";
});

document.getElementById("paper").addEventListener("click", function (){
   document.getElementById("you-pick").innerHTML = "[paper]";
});

document.getElementById("scissor").addEventListener("click", function (){
   document.getElementById("you-pick").innerHTML = "[scissor]";
});

document.getElementById("lizard").addEventListener("click", function (){
   document.getElementById("you-pick").innerHTML = "[lizard]";
});

document.getElementById("spock").addEventListener("click", function (){
   document.getElementById("you-pick").innerHTML = "[spock]";
});

let allChoice = [
    {name:"[rock]", beats:"[scissor]", beats2:"[lizard]"},
    {name:"[paper]", beats: "[rock]", beats2:"[spock]"},
    {name:"[scissor]", beats: "[paper]", beats2:"[lizard]"},
    {name:"[lizard]", beats:"[spock]", beats2:"[paper]"},
    {name:"[spock]", beats:"[paper]", beats2:"[rock]"}
    ];
document.getElementById("cpu-choice").addEventListener("click", function (){
   ComPick ();
});

// computer random
function ComPick () {
   let ComChoice = allChoice[Math.floor(Math.random()*4)];
   document.getElementById("com-pick").innerText = ComChoice.name ;
   findWinner(ComChoice);
}


// finding who is the winner
function findWinner(_comChoice) {
   let userChoice = document.getElementById("you-pick").innerText;
   const index = allChoice.findIndex(Choice => Choice.name === userChoice);
   const selection = allChoice[index];

   const userWin = isWinner(selection, _comChoice);
   const comWin = isWinner(_comChoice, selection);

   if (userWin === true) {
      document.getElementById("result").innerText= "( ^_^) You Win !! （^_^ ）";

      document.getElementById("user-score").innerText = parseInt(document.getElementById("user-score").innerText) + 1;
   }


   if (comWin === true) {
      document.getElementById("result").innerText = "('- -) You Lose (- -')";
      document.getElementById("com-score").innerText = parseInt(document.getElementById("com-score").innerText) + 1;
   }

   if (userWin === false && comWin === false) {
      document.getElementById("result").innerText = "~ It's draw ~";
   }
}

function isWinner(selection,opponentselection) {
   return (selection.beats === opponentselection.name || selection.beats2 === opponentselection.name);
}



//refresh page with reset button

document.getElementById('renew').addEventListener("click", function(){
   location.reload()
})

