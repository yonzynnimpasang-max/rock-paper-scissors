//this will happen after clicking the play button.
document.getElementById("play").addEventListener("click",function(){
    window.location.href="game.html";
});
const htp=document.getElementById("htp");
const popup=document.getElementById("popup");
document.getElementById("how_to_play").addEventListener("click",function(){
    htp.style.display="block";
    popup.textContent=`🎮 How to Play
 Choose Rock ✊, Paper ✋, or Scissors ✌️.
 The computer will make its choice automatically.
 The winner is decided using these rules:
 ✊ Rock beats Scissors
 ✋ Paper beats Rock
 ✌️ Scissors beats Paper
 If both choose the same move, it's a Draw.
 Tap Play Again to start a new round.


 Tip
Think carefully before making your choice. Good luck and have fun! 🎉`;
});
document.getElementById("closehowtoplay").addEventListener("click",function(){
    htp.style.display="none";
})
document.getElementById("closeSettings").addEventListener("click",function(){
    settings_container.style.display="none";
})
document.getElementById("setting").addEventListener("click",function(){
    settings_container.style.display="block";
})