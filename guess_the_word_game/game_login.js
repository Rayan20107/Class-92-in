
function addUser()
{
var Player1=document.getElementById("player1_username").value;

var Player2=document.getElementById("player2_username").value;

localStorage.setItem("player1_username", Player1);

localStorage.setItem("player2_username", Player2);

window.location="game_page.html";


}
