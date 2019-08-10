
var animals=["peguin"];
var cars=["mercedes"];
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word;
var answerArray=[]



function animal(){
    word= document.getElementById("hold").innerHTML; 
    word=animals[Math.floor(Math.random()*animals.length)];  
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById("hold").innerHTML = answerArray.join(" ");
    console.log(word);
}

function car(){
    word= document.getElementById("hold").innerHTML; 
    word=cars[Math.floor(Math.random()*cars.length)];  
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById("hold").innerHTML = answerArray.join(" ");
    console.log(word);

}


$(document).ready(function(){
        $("button").click(function() {
            var value = $(this).text();
            if(word.includes(value)){
                answerArray.forEach(function(item, i) { 
                    if (item) answerArray[i] = value; 
                    document.getElementById("hold").innerHTML=answerArray,join("");
                });
            }
            });
        });

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(10,20);
ctx.lineTo(10,200);
ctx.stroke();
ctx.moveTo(10,20);
ctx.lineTo(60,20);
ctx.stroke();
ctx.moveTo(60,20);
ctx.lineTo(60,40);
ctx.stroke();
ctx.beginPath();
ctx.arc(60,49,8,0,2*Math.PI);
ctx.stroke();
ctx.moveTo(60,90);
ctx.lineTo(60, 57);
ctx.stroke();
ctx.moveTo(60,57);
ctx.lineTo(85, 75);
ctx.stroke();
ctx.moveTo(60,57);
ctx.lineTo(35,79);
ctx.stroke();
ctx.moveTo(60,90);
ctx.lineTo(35,120);
ctx.stroke();
ctx.moveTo(60,90);
ctx.lineTo(85, 120);
ctx.stroke();
    
function showhappy() {
    document.getElementById("myhDiv").style.display="block";
    setTimeout("hideh()", 3000);  // 2 seconds
   }
   function hideh() {
    document.getElementById("myhDiv").style.display="none";
   }
   function showsad() {
    document.getElementById("mysDiv").style.display="block";
    setTimeout("hides()", 3000);  // 2 seconds
   }
   function hides() {
    document.getElementById("mysDiv").style.display="none";
   }


    