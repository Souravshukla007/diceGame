var no=Math.floor(Math.random()*6+1);
var num=Math.floor(Math.random()*6+1);
console.log(no);

function dice1(){
    if(no==1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if(no==2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(no==3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if(no==4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if(no==5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else if(no==6){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
}
function dice2(){
    if(num==1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else if(num==2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else if(no==3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else if(num==4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else if(num==5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else if(num==6){
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }
}
dice1();
dice2();
result();
function result(){
    if(no==num){
        document.querySelector("h1").textContent="Draw!";
    }
    else if(no>num){
        document.querySelector("h1").textContent="🚩Player 1 Wins!";
    }
    else if(no<num){
        document.querySelector("h1").textContent="Player 2 Wins! 🚩";
    }
}
document.querySelector("h1").addEventListener("click",function(){
    location.reload();
});

document.querySelector("body").addEventListener("keydown",function(){
    location.reload();
});

