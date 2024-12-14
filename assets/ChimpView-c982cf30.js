import{H as q,G as N}from"./GameSquare-00a19c17.js";import{r as v,k as z,_ as w,a as h,c as g,f as S,g as M,d as r,u as n,F as B,b as V,i as A,G as I,j as $,n as j,t as E}from"./index-bfd6a60f.js";function F(){const o=v("start"),s=v(1),p=v(localStorage.getItem("chimpGameBestLevel")||0),i=z([]),u=v([]),_=v(!1),m=v("Are you smarter than a chimpanzee? Click squares in ascending order."),f=()=>{i.length=0;const e=s.value+3,t=[],c=document.querySelector(".game-content"),b=c.clientWidth-60,H=c.clientHeight-60,y=50;for(let l=0;l<e;l++){let a,G,x;do a=Math.random()*(b-y),G=Math.random()*(H-y),x=t.some(L=>Math.abs(L.x-a)<y&&Math.abs(L.y-G)<y);while(x);t.push({x:a,y:G})}const d=Array.from({length:e},(l,a)=>a+1);for(let l=d.length-1;l>0;l--){const a=Math.floor(Math.random()*(l+1));[d[l],d[a]]=[d[a],d[l]]}d.forEach((l,a)=>{i.push({value:l,position:a,x:t[a].x,y:t[a].y,revealed:!0,clicked:!1})})},k=()=>{o.value="memorize",u.value=[],f(),setTimeout(()=>{o.value==="memorize"&&(_.value=!0,o.value="input")},3e3)};return{gameState:o,level:s,bestLevel:p,numbers:i,isHidden:_,gameStatus:m,startGame:k,checkNumber:e=>{if(o.value!=="input")return;const t=u.value.length+1;if(e===t){const c=i.find(b=>b.value===e);c&&(c.clicked=!0),u.value.push(e),u.value.length===i.length&&(s.value>p.value&&(p.value=s.value,localStorage.setItem("chimpGameBestLevel",s.value)),s.value++,setTimeout(()=>{k()},1e3))}else o.value="result",i.length=0,m.value=`Game Over!
Your record: Level ${s.value}
Best record: Level ${p.value}`},resetGame:()=>{s.value=1,o.value="start",_.value=!1,m.value="Are you smarter than a chimpanzee? Click squares in ascending order."}}}const O={class:"game-page"},W={class:"game-content"},D={key:0,class:"game-screen"},Y=["innerHTML"],J={key:1,class:"grid-container"},K=["onClick"],P={key:0,class:"game-screen"},Q=["innerHTML"],R={class:"other-games"},U={__name:"ChimpView",setup(o){const{gameState:s,level:p,bestLevel:i,numbers:u,isHidden:_,gameStatus:m,startGame:f,checkNumber:k,resetGame:C}=F();return(T,e)=>(h(),g("div",O,[S(q,{subtitle:"Click the squares in order according to their numbers. The test will get progressively harder."},{default:M(()=>[S(N,null,{default:M(()=>[r("div",W,[n(s)==="start"?(h(),g("div",D,[e[2]||(e[2]=r("h2",null,"Chimp Test",-1)),r("p",{class:"status",innerHTML:n(m)},null,8,Y),r("button",{class:"game-button",onClick:e[0]||(e[0]=(...t)=>n(f)&&n(f)(...t))},"Start Test")])):(h(),g("div",J,[(h(!0),g(B,null,V(n(u),(t,c)=>(h(),g("div",{key:c,class:$(["cell",{hidden:n(_)&&n(s)==="input"&&!t.clicked,clicked:t.clicked}]),style:j({left:t.x+"px",top:t.y+"px"}),onClick:b=>n(k)(t.value)},E(t.value),15,K))),128)),n(s)==="result"?(h(),g("div",P,[e[3]||(e[3]=r("h2",null,"Game Over",-1)),r("p",{class:"status",innerHTML:n(m)},null,8,Q),r("button",{class:"game-button",onClick:e[1]||(e[1]=(...t)=>n(C)&&n(C)(...t))},"Try Again")])):A("",!0)]))])]),_:1})]),_:1}),r("div",R,[e[4]||(e[4]=r("h2",null,"More Tests",-1)),S(I)])]))}},ee=w(U,[["__scopeId","data-v-4b3182fe"]]);export{ee as default};