import{_ as r,a as o,c as a,f as d,L as _,d as s,t as c,i,x as n}from"./index-bfd6a60f.js";const l={class:"hero"},u={key:0,class:"hero-header"},f={class:"hero-content"},h={class:"subtitle"},p={__name:"HeroSection",props:{title:{type:String,default:""},subtitle:{type:String,required:!0},showHeader:{type:Boolean,default:!1}},setup(e){return(t,S)=>(o(),a("div",l,[e.showHeader?(o(),a("div",u,[d(_,{class:"hero-icon"}),s("h1",null,c(e.title),1)])):i("",!0),s("div",f,[s("p",h,c(e.subtitle),1),n(t.$slots,"action",{},void 0,!0)]),n(t.$slots,"default",{},void 0,!0)]))}},b=r(p,[["__scopeId","data-v-6c88ee5c"]]);const m={},v={class:"game-square"};function y(e,t){return o(),a("div",v,[n(e.$slots,"default",{},void 0,!0)])}const H=r(m,[["render",y],["__scopeId","data-v-b1db2cf2"]]);export{H as G,b as H};