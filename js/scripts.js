var initialScore=0;
$(document).ready(function(){
  $("#roll-firstdie").click(function(){
    var firstdie=document.getElementById('firstdie');
    var moringa=document.getElementById('moringa');
    var firstScore = Math.floor(Math.random() *6 )+1;
    firstdie.innerHTML=firstScore;
    moringa.innerHTML= ("You rolled " + firstScore +". ");
    var hold1=document.getElementById('hold1');
    var cScore=document.getElementById('cScore');
    var cumulativeScore =initialScore+=firstScore;
    cScore.innerHTML=("your cumulative score is " + cumulativeScore);
    if (firstScore===1){
      hold1.innerHTML=("it is the next players turn.");
    }else if(cumulativeScore===100){
       hold1.innerHTML=("Bravo!!!firstplayer won the game.");
    }
    else {
      hold1.innerHTML=("continue");
    }

    });
  $("#roll-seconddie").click(function(){
    var seconddie=document.getElementById('seconddie')
    var moringah=document.getElementById('moringah');
    var secondScore = Math.floor(Math.random() *6 )+1;
    seconddie.innerHTML=secondScore;
    moringah.innerHTML= ("You rolled " + secondScore +". ");
    var hold2=document.getElementById('hold2');
    var cScoree=document.getElementById('cScoree');
    var cumulativeScore =initialScore+=secondScore;
    cScoree.innerHTML=("your cumulative score is " + cumulativeScore);
    if (secondScore===1){
      hold2.innerHTML=("it is the next players turn.");
    }else if(cumulativeScore===100){
        hold2.innerHTML=("Bravo!!!secondplayer won the game.");
    }
    else {
      hold2.innerHTML=("continue");
    }
 });
});
