import{j as e}from"./jsx-runtime.BBXyepoZ.js";import{r as d}from"./index.BJiRiHOl.js";import{t as u}from"./bundle-mjs.CSqCgoPn.js";import{c as s}from"./createLucideIcon.diKuDrnw.js";import{X as k}from"./x.D1Ho1pK_.js";import"./_commonjsHelpers.Cpj98o6Y.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=s("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),C=({name:r,className:t})=>{switch(r){case"tabler:currency-bitcoin":return e.jsx(f,{className:t});case"tabler:currency-ethereum":return e.jsx(j,{className:t});case"tabler:currency-solana":return e.jsx(p,{className:t});default:return e.jsx(p,{className:t})}};function H({ariaLabel:r,address:t,icon:x,color:y,qrCode:o}){const[l,n]=d.useState(!1),[i,m]=d.useState(!1),h=async a=>{a.preventDefault();try{await navigator.clipboard.writeText(t),n(!0),setTimeout(()=>n(!1),2e3)}catch(g){console.error("Failed to copy:",g)}},c=a=>{a.preventDefault(),a.stopPropagation(),m(!i)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative group",children:[e.jsx("button",{onClick:h,className:u(y,"text-white mx-2 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1 inline-flex items-center relative transition-transform hover:scale-110"),"aria-label":`${r} - Click to copy address`,children:e.jsx(C,{name:x,className:"w-5 h-5"})}),o&&e.jsx("button",{onClick:c,className:"absolute -top-1 -right-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity","aria-label":`Show ${r} QR Code`,children:e.jsx(w,{className:"w-3 h-3"})})]}),i&&o&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",onClick:c,children:e.jsxs("div",{className:"relative bg-white dark:bg-gray-800 p-6 rounded-lg",onClick:a=>a.stopPropagation(),children:[e.jsx("button",{onClick:c,className:"absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700","aria-label":"Close QR Code",children:e.jsx(k,{className:"w-4 h-4"})}),e.jsxs("h3",{className:"text-lg font-semibold mb-4 text-gray-900 dark:text-white",children:[r," Address"]}),e.jsx("img",{src:o,alt:`${r} QR Code`,className:"w-64 h-64 mx-auto"}),e.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400 mt-4 break-all text-center max-w-xs",children:t}),e.jsxs("button",{onClick:h,className:"mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2",children:[l?e.jsx(b,{className:"w-4 h-4"}):e.jsx(v,{className:"w-4 h-4"}),l?"Copied!":"Copy Address"]})]})})]})}export{H as CryptoButton};
