var animals=["lion","tiger","zebra","girafe","peguin"];
var cars=["mercedes","polo","honda","jeep","bmw"];
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var word;

function animal(){
    word=animals[Math.floor(Math.random()*animals.length)];
    word=word.replace(/\s/g, "-");
    console.log(word);
}