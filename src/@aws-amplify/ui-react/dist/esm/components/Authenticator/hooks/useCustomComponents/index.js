import*as o from"react";const t=o.createContext(null),e=()=>{const e=o.useContext(t);if(!e)throw new Error("`useCustomComponents` cannot be used outside of a `CustomComponentsContext.Provider`");return e};export{t as CustomComponentsContext,e as useCustomComponents};
