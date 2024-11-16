


var  names = ["Good friends, good books, and a sleepy conscience: this is the ideal life.","It does not do to dwell on dreams and forget to live.","Life is what happens to us while we are making other plans.","Everything you can imagine is real" , "Sometimes the questions are complicated and the answers are simple" ,"Life isn't about finding yourself. Life is about creating yourself.","Things change. And friends leave. Life doesn't stop for anybody."];
var containbox = document.getElementById('box');
var btn = document.getElementById('demo');
var lastquote = " "

function randomnum(){
    var i ;
     
    do{
          i = Math.floor(Math.random()*names.length);

    }  while (names[i] === lastquote)
      var result = names[i];
        containbox.innerHTML = '  "  '+ result+  '  "  '; 
        lastquote =  result ; 
       
}


btn.onclick  = randomnum ;
