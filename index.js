
var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "🚩 Player2 Wins!";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}







randomNumber1 = "images/dice" + randomNumber1 + ".png" ;
// console.log(randomNumber1);
document.querySelector("img.img1").setAttribute("src",randomNumber1);



randomNumber2 = "images/dice" + randomNumber2 + ".png" ;
// console.log(randomNumber2);
document.querySelector("img.img2").setAttribute("src",randomNumber2);
