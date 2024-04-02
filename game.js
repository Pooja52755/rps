let choices=document.querySelectorAll(".choices div");
let msg=document.getElementById("msg")
let uscore=document.querySelector("#you")
let compcore=document.querySelector("#comp")
var userscore=0;
var compscore=0;
let userwin=true;
var f=0;
const displaywinner=(userchoice,compchoice)=>{
    if (userwin==='draw'){
        msg.innerText=`Its a draw!${userchoice} draws ${compchoice}`;
        msg.style.backgroundColor =  'rgb(159, 190, 196)';
        userwin='not draw';
    }
    else if (userwin){
        msg.innerText=`Congrats,you won!${userchoice} defeats ${compchoice}`;
      msg.style.backgroundColor = 'Green';
        userscore+=1;
        uscore.innerText=userscore;
    }
    else{
        msg.innerText=`Sorry,you lost!${compchoice} defeats ${userchoice}`;
        compscore+=1;
        compcore.innerText=compscore;
      msg.style.backgroundColor = 'red';
    }
    
}
const checkwinner=(userchoice)=>{   
    const compchoice=['rock','paper','scissors'][Math.floor(Math.random()*3)];
    if (userchoice===compchoice){
      userwin='draw';
    }
    else if (userchoice==='rock'){
      userwin=compchoice==='scissors'?true:false;
    }
    else if(userchoice==='paper'){
        userwin=compchoice==='rock'?true:false;
    }
    else{
        userwin=compchoice==='paper'?true:false;
    }
    displaywinner(userchoice,compchoice)
}
choices.forEach((cho)=>{   
cho.addEventListener("click",()=>{ 
    const userchoice=cho.getAttribute("id");
    checkwinner(userchoice);
});
});