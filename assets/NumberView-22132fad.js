import{r as o,_ as N,a as v,c as d,f,g as L,d as s,u as t,t as y,i as w,p as h,v as S,q as k,s as M,G as T}from"./index-bfd6a60f.js";import{H as x,G as C}from"./GameSquare-00a19c17.js";function V(){const l=o("start"),r=o(""),m=o(""),a=o(1),i=o(localStorage.getItem("numberGameBestLevel")||0),p=o("Remember the longest number you can remember"),u=o(!1),g=()=>{const G=a.value;let e="";for(let n=0;n<G;n++)e+=Math.floor(Math.random()*10);r.value=e},c=()=>{l.value="memorize",m.value="",u.value=!1,g(),setTimeout(()=>{l.value==="memorize"&&(l.value="input")},3e3)};return{gameState:l,currentNumber:r,userInput:m,level:a,bestLevel:i,gameStatus:p,showLevel:u,startGame:c,submitAnswer:()=>{m.value===r.value?(a.value++,a.value>i.value&&(i.value=a.value,localStorage.setItem("numberGameBestLevel",a.value)),c()):(l.value="result",u.value=!0,p.value=`Your record: Level ${a.value}
Best record: Level ${i.value}`)},resetGame:()=>{a.value=1,l.value="start",u.value=!1,p.value="Remember the longest number you can remember"}}}const B={class:"game-page"},H={class:"game-content"},I={key:0,class:"start-screen"},z=["innerHTML"],A={key:1,class:"game-screen"},R={class:"number"},q={key:2,class:"game-screen"},D={key:0,class:"level"},K={key:3,class:"game-screen"},$=["innerHTML"],E={class:"other-games"},O={__name:"NumberView",setup(l){const{gameState:r,currentNumber:m,userInput:a,level:i,bestLevel:p,gameStatus:u,showLevel:g,startGame:c,submitAnswer:b,resetGame:_}=V();return(G,e)=>(v(),d("div",B,[f(x,{subtitle:"The average person can remember 7 numbers at once. Can you do more?"},{default:L(()=>[f(C,null,{default:L(()=>[s("div",H,[t(r)==="start"?(v(),d("div",I,[e[5]||(e[5]=s("h2",null,"Number Memory",-1)),s("p",{class:"status",innerHTML:t(u)},null,8,z),s("button",{class:"game-button",onClick:e[0]||(e[0]=(...n)=>t(c)&&t(c)(...n))},"Start Test")])):t(r)==="memorize"?(v(),d("div",A,[e[6]||(e[6]=s("h2",null,"Memorize",-1)),s("div",R,y(t(m)),1)])):t(r)==="input"?(v(),d("div",q,[e[7]||(e[7]=s("h2",null,"What was the number?",-1)),t(g)?(v(),d("div",D,"Level "+y(t(i)),1)):w("",!0),h(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>k(a)?a.value=n:null),class:"number-input",pattern:"[0-9]*",inputmode:"numeric",onKeyup:e[2]||(e[2]=M((...n)=>t(b)&&t(b)(...n),["enter"])),autofocus:""},null,544),[[S,t(a)]]),s("button",{class:"game-button",onClick:e[3]||(e[3]=(...n)=>t(b)&&t(b)(...n))},"Submit")])):t(r)==="result"?(v(),d("div",K,[e[8]||(e[8]=s("h2",null,"Game Over",-1)),s("p",{class:"status",innerHTML:t(u)},null,8,$),s("p",null,"Correct Number: "+y(t(m)),1),s("button",{class:"game-button",onClick:e[4]||(e[4]=(...n)=>t(_)&&t(_)(...n))},"Try Again")])):w("",!0)])]),_:1})]),_:1}),s("div",E,[e[9]||(e[9]=s("h2",null,"More Tests",-1)),f(T)])]))}},Y=N(O,[["__scopeId","data-v-111320d2"]]);export{Y as default};
