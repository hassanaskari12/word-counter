var user = prompt("Enter a sentence");
var withoutspace = user.trim();
var word = 0;
var space = false;
for(var i =0;i<withoutspace.length;i++){
    if(withoutspace[i] !== " "){
       if(!space){
        word++;
        space = true
       } 
    }else if(withoutspace[i] === " "){
        space = false
    }
}
alert(`The words in the given Sentence = ${word}`)