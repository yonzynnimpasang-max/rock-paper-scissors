const result=document.getElementById("result");
const resultContent=document.getElementById("resultContent");
const object=['rock','paper','scissor'];
const choices=document.querySelectorAll(".choice");
choices.forEach(choice=>{choice.addEventListener("click",function(){
       const playerChoice=choice.dataset.choice;
    const computerChoice=object[Math.floor(Math.random()*object.length)];
    playGame(playerChoice,computerChoice);
});});
const playerImg=document.getElementById("playerImg");
const computerImg=document.getElementById("computerImg");
const vs=document.getElementById("vs");
const tryagain=document.getElementById("try");
const mainmenu=document.getElementById("mainmenu");
const pause=document.getElementById("pause");
const resume=document.getElementById("resume");
const restart=document.getElementById("restart");
const forfeit=document.getElementById("forfeit");


resume.addEventListener("click",()=>{
    location.reload();
});
restart.addEventListener("click",()=>{
    location.reload();
});
forfeit.addEventListener("click",()=>{
    window.location.href="home.html";
});
pause.addEventListener("click",function(){
    menu.style.display="block";
});


tryagain.addEventListener("click",function(){
      location.reload();
});
mainmenu.addEventListener("click",function(){
      window.location.href="home.html";
});

function getImage(choice){
    if (choice=="rock") return "fist.svg";
    if (choice=="paper") return "paper.svg";
    return "scissors.svg";
};

function playGame(playerChoice,computerChoice){
setTimeout(() => {
    playerImg.src = getImage(playerChoice);
    playerImg.style.opacity=1;
}, 500);
setTimeout(() => {
  vs.style.opacity=1;
}, 1500);
setTimeout(() => {
    computerImg.src = getImage(computerChoice);
    computerImg.style.opacity=1;
}, 1000);


setTimeout(() => {
    if (playerChoice === computerChoice) {
        result.style.display = "block";
        resultContent.textContent = "It's a draw";
    }
    else if (
        (playerChoice === "scissor" && computerChoice === "paper") ||
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result.style.display = "block";
        resultContent.textContent = "You Win!";
    }
    else {
        result.style.display = "block";
        resultContent.textContent = "You Lose!";
    }
}, 2000);
};