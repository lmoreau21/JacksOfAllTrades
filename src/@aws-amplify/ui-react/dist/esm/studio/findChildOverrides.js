const r=(r,t)=>{if(!r)return null;const e=Object.entries(r).filter((r=>r[0].startsWith(t)));return Object.assign({},...Array.from(e,(([r,e])=>({[r.replace(t,"")]:e}))))};export{r as findChildOverrides};