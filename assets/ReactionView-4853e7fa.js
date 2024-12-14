import{H as b,G as x}from"./GameSquare-00a19c17.js";import{_ as h,r as y,o as C,a as l,c as i,F as p,b as _,n as v,d as s,e as S,w as M,f,g as w,h as $,i as k,u as o,t as g,j as I,G as B}from"./index-bfd6a60f.js";const F={class:"fireworks-container"},G={__name:"Fireworks",setup(c){const a=y([]),m=t=>{const r=t*18%360,n=r%90;return{"--angle":`${r}deg`,"--hue":n,"--delay":`${Math.random()*.2}s`}},u=()=>{const t=40+Math.random()*20,r=40+Math.random()*20,n=Math.random()*4+4,d=.8+Math.random()*.4,e=Math.random()*360;a.value.push({wrapperStyle:{left:`${t}%`,top:`${r}%`,"--duration":`${d}s`},style:{width:`${n}px`,height:`${n}px`,"--hue":e}}),setTimeout(()=>{a.value.shift()},d*1e3)};return C(()=>{for(let r=0;r<3;r++)setTimeout(()=>u(),r*200);const t=setInterval(()=>{a.value.length<8&&u()},300);setTimeout(()=>{clearInterval(t)},3e3)}),(t,r)=>(l(),i("div",F,[(l(!0),i(p,null,_(a.value,(n,d)=>(l(),i("div",{key:d,class:"firework-wrapper",style:v(n.wrapperStyle)},[s("div",{class:"firework",style:v(n.style)},[(l(),i(p,null,_(20,e=>s("div",{key:e,class:"spark",style:v(m(e))},null,4)),64))],4)],4))),128))]))}},V=h(G,[["__scopeId","data-v-fe874180"]]);function N(){const c=y("start"),a=y(0),m=y(0),u=y(1/0);let t=null;const r=y(!1),n=()=>{c.value="wait";const e=Math.random()*4e3+1e3;t&&clearTimeout(t),t=setTimeout(()=>{c.value="ready",a.value=Date.now()},e)},d=()=>{switch(c.value){case"start":n();break;case"wait":clearTimeout(t),m.value=-1,c.value="result";break;case"early":clearTimeout(t),m.value=-1,c.value="result";break;case"ready":const e=Date.now()-a.value;m.value=e,e<u.value&&e>0&&(u.value=e,r.value=!0,setTimeout(()=>{r.value=!1},3e3)),c.value="result";break;case"result":n();break}};return S(()=>{t&&clearTimeout(t)}),{gameState:c,reactionTime:m,bestTime:u,handleClick:d,isNewBestTime:r}}const R={class:"game-page"},D={class:"game-text"},W={key:2},z={class:"result"},H={key:0,class:"best-time"},q={key:1,class:"congratulations"},E={class:"other-games"},j={__name:"ReactionView",setup(c){const{gameState:a,reactionTime:m,bestTime:u,handleClick:t,isNewBestTime:r}=N(),n=y(!1);return M(r,d=>{d&&(n.value=!0,setTimeout(()=>{n.value=!1},3e3))}),(d,e)=>(l(),i("div",R,[f(b,{subtitle:"When the red box turns green, click as quickly as you can."},{default:w(()=>[f(x,null,{default:w(()=>[s("div",{class:I(["game-content",{wait:o(a)==="wait",ready:o(a)==="ready","not-clickable":o(a)==="wait"}]),onClick:e[0]||(e[0]=(...T)=>o(t)&&o(t)(...T))},[n.value?(l(),$(V,{key:0})):k("",!0),s("div",D,[o(a)==="start"?(l(),i(p,{key:0},[e[1]||(e[1]=s("h2",null,"Test your reaction speed",-1)),e[2]||(e[2]=s("p",null,"When the screen turns green, tap the screen!",-1)),e[3]||(e[3]=s("p",null,"Click anywhere to start",-1))],64)):o(a)==="wait"?(l(),i(p,{key:1},[e[4]||(e[4]=s("h2",null,"Wait for the green to appear....",-1)),e[5]||(e[5]=s("p",null,"Ready to click",-1))],64)):o(a)==="ready"?(l(),i("h2",W,"Click!")):o(a)==="result"?(l(),i(p,{key:3},[e[6]||(e[6]=s("h2",null,"Your reaction time",-1)),s("div",z,g(o(m))+"ms",1),o(u)<1/0?(l(),i("p",H,"Best record: "+g(o(u))+"ms",1)):k("",!0),o(u)<1/0?(l(),i("p",q,"Congratulations, you broke the best record")):k("",!0),e[7]||(e[7]=s("p",null,"Click to try again.",-1))],64)):o(a)==="early"?(l(),i(p,{key:4},[e[8]||(e[8]=s("h2",null,"Too Early!",-1)),e[9]||(e[9]=s("p",null,"Wait for the green to appear before clicking.",-1)),e[10]||(e[10]=s("p",null,"Click anywhere to try again.",-1))],64)):k("",!0)])],2)]),_:1})]),_:1}),s("div",E,[e[11]||(e[11]=s("h2",null,"More Tests",-1)),f(B)])]))}},Y=h(j,[["__scopeId","data-v-cabd54d0"]]);export{Y as default};
