$('.btn').click(function() {

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if(console.log(getRandomInt(3)) == 1 ){
    document.getElementById("Bgcolor").style.color = "blue";
  }
  if(console.log(getRandomInt(3)) == 2 ){
    document.getElementById("Bgcolor").style.color = "red";
  }
  if(console.log(getRandomInt(3)) == 3 ){
    document.getElementById("Bgcolor").style.color = "green";
  }
})