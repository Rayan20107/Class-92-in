question_turn="player1";

answer_turn="player2";

player1=localStorage.getItem("player1_username");

player1Score=0;

document.getElementById("player1_name").innerHTML=player1+":";

document.getElementById("player1_score").innerHTML=player1Score;

document.getElementById("player_question").innerHTML="Qwuestion turn: "+player1;

player2=localStorage.getItem("player2_username");

player2Score=0;

document.getElementById("player2_name").innerHTML=player2+":";

document.getElementById("player2_score").innerHTML=player2Score;

document.getElementById("player_answer").innerHTML="Answer turn: "+player2;

function send()
{
   word_given_by_player=document.getElementById("word").value;
    
  word=word_given_by_player.toLowerCase();

  a=word.charAt(1);
  
  console.log(a);

  midvalue=Math.floor(word.length/2);

  b=word.charAt(midvalue);

  lastvalue=word.length-1;

  c=word.charAt(lastvalue);

  removeA=word.replace(a, "_");

  removeB=removeA.replace(b, "_");

  removeC=removeB.replace(c, "_");

  var question_word="<h4 id='word_display'>"+removeC+"</h4>";

  input="<br> answer: <input type='text' id='input_box'>";

  check_button="<br><button class='btn btn-info' onclick='check()'>Check</button>"

  row=question_word+input+check_button;

  document.getElementById("output").innerHTML=row;

  document.getElementById("word").value="";
}

function check()
{
  get_answer=document.getElementById("input_box").value;

  answer=get_answer.toLowerCase();

  if(answer==word) {
    if (answer_turn=="player2") {
      player2Score=player2Score+1;
      document.getElementById("player2_score").innerHTML=player2Score;
    }
    else{
      player1Score=player1Score+1;
      document.getElementById("player1_score").innerHTML=player1Score;
    }
  }

  if (question_turn=="player1") {
     question_turn="player2";
     document.getElementById("player_question").innerHTML="question_turn"+player2;
  }
 else{
   question_turn="player1"
   document.getElementById("player_question").innerHTML="question_turn"+player1;
 }

 if (answer_turn=="player1") {
  answer_turn="player2";
  document.getElementById("player_answer").innerHTML="answer_turn"+player2;
}
else{
answer_turn="player1"
document.getElementById("player_answer").innerHTML="answer_turn"+player1;
}

document.getElementById("output").innerHTML="";
}

