const t=({breakpoints:t})=>{const n=Object.keys(t).sort(((n,e)=>t[e]-t[n]));return n.map(((e,r)=>{let i="";const o=t[e],a=n[r-1],p=a?t[a]-1:null;return o>=0&&(i=`(min-width: ${o}px)`),null!==p&&(i&&(i+=" and "),i+=`(max-width: ${p}px)`),{breakpoint:e,query:i,maxWidth:p,minWidth:o}}))};export{t as getMediaQueries};