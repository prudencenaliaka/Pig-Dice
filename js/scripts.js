var initialScore=0;
$(document).ready(function(){
  $("#roll-firstdie").click(function(){
    var firstdie=document.getElementById('firstdie');
    var moringa=document.getElementById('moringa');
    var firstScore = Math.floor(Math.random() *6 )+1;
    firstdie.innerHTML=firstScore;
    moringa.innerHTML= ("You rolled " + firstScore +". ");
    var hold=document.getElementById('hold');
    var cScore=document.getElementById('cScore');
    var cummulativeScore =initialScore+=firstScore;
    cScore.innerHTML=("your cummulative score is " + cummulativeScore);
    if (firstScore===1){
      hold.innerHTML=("it is the next players turn.");
    }else {
      hold.innerHTML=("continue");
    }
    });
  $("#roll-seconddie").click(function(){
    var seconddie=document.getElementById('seconddie')
    var moringah=document.getElementById('moringah');
    var secondScore = Math.floor(Math.random() *6 )+1;
    seconddie.innerHTML=secondScore;
    moringah.innerHTML= ("You rolled " + secondScore +". ");
    var stop=document.getElementById('stop');
    var cScoree=document.getElementById('cScoree');
    var cummulativeScore =initialScore+=secondScore;
    cScoree.innerHTML=("your cummulative score is " + cummulativeScore);
    if (secondScore===1){
      stop.innerHTML=("it is the next players turn.");
    }else {
      stop.innerHTML=("continue");
    }
 });
});
