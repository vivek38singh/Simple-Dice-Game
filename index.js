function Button(){

var d1=Math.random()*5+1;
d1=Math.round(d1);

var d2=Math.random()*5+1;
d2=Math.round(d2);

var first="images/dice"+d1+".png"
var second="images/dice"+d2+".png"
document.querySelector(".dice .img1").setAttribute("src",first);
document.querySelector(".dice .img2").setAttribute("src",second);


if (d1>d2){
document.querySelector("h1").innerHTML ="👑Player 1 Wins";
}
else if (d1<d2) {
  document.querySelector("h1").innerHTML ="👑Player 2 Wins";
}
else {
  document.querySelector("h1").innerHTML ="It is A Draw 😜";
}
}
