var initialScore=0;
var totalPlayer1 = 0;
var totalPlayer2 = 0;
// var cumulativeScorePl1;
$(document).ready(function(){
  $("#roll-firstdie").click(function(){
    event.preventDefault();
    var firstdie=document.getElementById('firstdie');
    var moringa=document.getElementById('moringa');
    var firstScore = Math.floor(Math.random() *6 )+1;
    firstdie.innerHTML=firstScore;
    moringa.innerHTML= ("You rolled " + firstScore +". ");
    var hold1=document.getElementById('hold1');
    var cScore=document.getElementById('cScore');
    cumulativeScorePl1 = initialScore+=firstScore;
    cScore.innerHTML=("your cumulative score is " + cumulativeScorePl1);
    if (firstScore===1){
      initialScore = 0;
      $("#roll-firstdie").hide();
      $("#roll-seconddie").show();
      $("#holdTwo").show();
      $("#holdOne").hide();
      hold1.innerHTML=("it is the next players turn.");
     }
    else if(cumulativeScorePl1>=100){
       hold1.innerHTML=("Bravo!!!firstplayer won the game refresh and start.");
    }
    else {
      hold1.innerHTML=("continue");
    }
  });
  $("#roll-seconddie").click(function(){
    event.preventDefault();
    var seconddie=document.getElementById('seconddie')
    var moringah=document.getElementById('moringah');
    var secondScore = Math.floor(Math.random() *6 )+1;
    seconddie.innerHTML=secondScore;
    moringah.innerHTML= ("You rolled " + secondScore +". ");
    var hold2=document.getElementById('hold2');
    var cScoree=document.getElementById('cScoree');
    cumulativeScorePl2 =initialScore+=secondScore;
    cScoree.innerHTML=("your cumulative score is " + cumulativeScorePl2);
    if (secondScore===1){
      initialScore = 0;
      $("#roll-seconddie").hide();
      $("#roll-firstdie").show();
      $("#holdTwo").hide();
      $("#holdOne").show();
      hold2.innerHTML=("it is the next players turn.");
     }
    else if(cumulativeScorePl2>=100){
        hold2.innerHTML=("Bravo!!!secondplayer won the game refresh and start.");
    }else {
        hold2.innerHTML=("continue");
      }
    });
   $("#holdOne").click(function(){
     $("#roll-firstdie").hide();
     $("#roll-seconddie").show();
     $("#holdTwo").show();
     $("#holdOne").hide();
      totalPlayer1 += cumulativeScorePl1;
      $("#score1").text(totalPlayer1);
      cumulativeScorePl2=0;
      secondScore=0;

    });

    $("#holdTwo").click(function(){
      $("#roll-firstdie").show();
      $("#roll-seconddie").hide();
      $("#holdTwo").hide();
      $("#holdOne").show();
       totalPlayer2 += cumulativeScorePl2;
       $("#score2").text(totalPlayer2);
       cumulativeScorePl1=0;
       firstScore=0;

     });

  });
