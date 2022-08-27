import{a as u}from"./index-26be548e.js";import{ac as d}from"./index-dd15cb5d.js";function g(t,{delay:o=0,duration:a=400,easing:n=d}={}){const r=+getComputedStyle(t).opacity;return{delay:o,duration:a,easing:n,css:s=>`opacity: ${s*r}`}}function x(t,{delay:o=0,duration:a=400,easing:n=u,x:r=0,y:s=0,opacity:p=0}={}){const c=getComputedStyle(t),e=+c.opacity,f=c.transform==="none"?"":c.transform,m=e*(1-p);return{delay:o,duration:a,easing:n,css:(i,y)=>`
			transform: ${f} translate(${(1-i)*r}px, ${(1-i)*s}px);
			opacity: ${e-m*y}`}}export{g as a,x as f};
