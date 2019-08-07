var animals=["lion","tiger","zebra","girafe","peguin"];
var cars=["mercedes","polo","honda","jeep","bmw"];
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word;
var answerArray=[]

function animal(){
    word= document.getElementById("hold").innerHTML; 
    word=animals[Math.floor(Math.random()*animals.length)];  
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById("hold").innerHTML = answerArray;
    console.log(word);
}

function car(){
    word= document.getElementById("hold").innerHTML; 
    word=cars[Math.floor(Math.random()*cars.length)];  
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }  
    document.getElementById("hold").innerHTML = answerArray;
    console.log(word);
}