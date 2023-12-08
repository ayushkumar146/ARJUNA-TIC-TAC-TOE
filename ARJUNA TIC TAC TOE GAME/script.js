let p1=document.getElementById("name1");
let ip1=document.getElementsByClassName("inputname1")[0];
let pn1=document.getElementsByClassName("playername1")[0];
let c1=document.getElementsByClassName("chance1")[0];
let c2=document.getElementsByClassName("chance2")[0];
let w1=document.getElementsByClassName("winner")[0];
let go=true;
let g1=document.getElementsByClassName("gif")[0];

// console.log(w1);

p1.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
    ip1.classList.add('hide');
    pn1.classList.remove('hide');
    pn1.innerHTML=e.target.value;
    c1.innerHTML=  e.target.value;
    }
})
let p2=document.getElementById("name2");
let ip2=document.getElementsByClassName("inputname2")[0];
let pn2=document.getElementsByClassName("playername2")[0];
p2.addEventListener('keyup',(e)=>{
    if(e.key=='Enter'){
    ip2.classList.add('hide');
    pn2.classList.remove('hide');
    pn2.innerHTML=e.target.value;
    c2.innerHTML= e.target.value;
    }
})

let music=new Audio("arjan.mp3")
let turn="X";

let changeturn=(()=>{
    return turn==="X"?"O":"X";
})

let turnaudio=new Audio("ting.mp3");
let gm=new Audio("gameover.mp3");
let box=document.getElementsByClassName("box");

Array.from(box).forEach((e)=>{
         e.addEventListener('click',(val)=>{
            // console.log(val.target.innerHTML);
            val.target.innerHTML=turn;
                 turnaudio.play();
                 checkwin();
                 if(go===true){
                 if (turn == "X") {
                    c2.classList.toggle('hidden', false);
                    c1.classList.toggle('hidden', true);
                } else {
                    c1.classList.toggle('hidden', false);
                    c2.classList.toggle('hidden', true);
                }
            
            turn=changeturn();
            w1.classList.add('hidden');
            }
         })
})
let h1=document.getElementsByClassName("head1")[0];
let h=document.getElementsByClassName("head")[0];
const checkwin=(()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [1,4,8],
        [2,4,6]
    ];
    win.forEach((e)=>{

        if(box[e[0]].innerHTML===box[e[1]].innerHTML && box[e[1]].innerHTML===box[e[2]].innerHTML && box[e[0]].innerHTML!==""){
            console.log("yes");

            c1.classList.add('hidden');
                    c2.classList.add('hidden');
                    console.log(c1);
                    console.log(c2);
                    h.classList.add('hidden');
            w1.classList.remove('hidden');
            h1.classList.remove('hidden');
                 g1.classList.remove('hidden');
            console.log(w1);

                    if(turn==="X"){
                       w1.innerHTML='THE WINNER IS ' +c1.innerHTML;
                       h1.innerHTML=`<h1 class="letsplay">THE WINNER IS ${c1.innerHTML}</h1>` 
                    }
                    else{
                        w1.innerHTML='THE WINNER IS ' +c2.innerHTML;
                        h1.innerHTML=`<h1 class="letsplay">THE WINNER IS ${c2.innerHTML}</h1>` 
                    }
                    Array.from(box).forEach((e)=>{
                        e.innerHTML="";
                    })
                    go=false;
        }
    })
})

let b1=document.getElementsByClassName("reset")[0];
b1.addEventListener('click',()=>{
Array.from(box).forEach((val)=>{
        // console.log(val.innerHTML);
        val.innerHTML="";
})
gm.play();
turn="X";
w1.classList.add('hidden');
go=true;
g1.classList.add('hidden');
h1.classList.add('hidden');
h.classList.remove('hidden');
})
let m1=document.getElementsByClassName("music")[0];
m1.addEventListener('click',()=>{
    music.paused?music.play():music.pause();
})

