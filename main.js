let randomNum = Math.floor(Math.random()*3) +1 ;

console.log(randomNum);

let yourMove = prompt('Your Move: ');

if (randomNum === 1){
  if (yourMove === "rock"){
    console.log("Its a Tie");
  else if (yourMove === "paper"){
    console.log("You Lose")
  }
log  }
}

//1 = rock
//2 = paper
//3 = scissors
