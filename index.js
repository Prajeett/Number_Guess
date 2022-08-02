const answer = Math.ceil(Math.random()*10);
let guesses = 0;
document.getElementById("submitBtn").onclick = function(){
let guess = document.getElementById("guessField").value;
guesses += 1;
if (guess == answer){
    alert (`${answer} is the #, It took you ${guesses} guesses`)
}

else if (guess > answer){
    alert("guess is too high")


}
else
{
    alert("guess is too low")
}


}
console.log(answer);