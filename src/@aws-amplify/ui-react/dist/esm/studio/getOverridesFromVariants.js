function e(e,t){const s=[...new Set(e.flatMap((e=>Object.keys(e.variantValues))))],n=Object.keys(t).filter((e=>s.includes(e)&&t[e])).reduce(((e,s)=>(e[s]=t[s],e)),{});return e.filter((({variantValues:e})=>Object.keys(e).length===Object.keys(n).length&&Object.entries(e).every((([e,t])=>n[e]===t)))).reduce(((e,t)=>Object.assign(Object.assign({},e),t.overrides)),{})}export{e as getOverridesFromVariants};
