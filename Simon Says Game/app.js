let gameseq=[];
let userseq=[];
let btns=["red","green","blue","pink"];

let started=false;
let level=0;

let h3=document.querySelector("h2");

let sbtn=document.querySelector(".start-btn");
sbtn.addEventListener("click",function(){
    if(started==false){
    console.log("Game Started");
    started=true;

    levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randomInd=Math.floor(Math.random()*3);
    let randomcolor=btns[randomInd];
    let randbtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(ind){
    if(userseq[ind]===gameseq[ind]){
        if(userseq.length==gameseq.length) {
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML= `Game Over!! Your Score was : <b>${level}</b><br> click start to play again.`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="black";
        },100);
        reset();
    }
}
function buttonpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",buttonpress);
}

function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}