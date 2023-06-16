import{s as n,r as d,j as r,a as e}from"./index.7f74dd55.js";import{A as x}from"./index.esm.e6997048.js";import"./iconBase.65ca1c80.js";const u="/assets/logodark.a35add7d.svg",w=n.nav`
    background-color: #f5f1edff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    padding: 0 5dvw;
    gap: 10%;
    font-family: "Courier New", Courier, monospace;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`,h=n.img`
    width: 10em;
`,g=n.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,i=n.div`
    color: #151515;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 768px) {
        margin: 10px 0;
        font-family: "Helvetica", sans-serif;
        font-size: 18px;
    }
`,C=n.button`
    background-color: #f5f1edff;
    border: solid 1px #121212;
    border-radius: 50px;
    width: 30em;
    padding: 10px 20px;
    color: #121212;
    cursor: pointer;
    font-size: 16px;
    font-family: "Courier New", Courier, monospace;
    @media (max-width: 768px) {
        margin: 1em;
        width: 100%;
    }
`;function k({scrollToSobre:a,scrollToServicos:l,scrollToPortfolio:c,scrollToPreco:f,scrollToForm:p,scrollToContato:m}){const[o,s]=d.exports.useState(!1);return d.exports.useEffect(()=>{const t=()=>{s(window.innerWidth>768)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),r(w,{children:[r("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"10px",width:o?"50%":"100%"},children:[e(h,{src:u}),e(x,{size:"2em",onClick:()=>s(!o),style:{display:window.innerWidth>768?"none":"block"}})]}),o&&r(g,{children:[e(i,{onClick:a,children:"Sobre"}),e(i,{onClick:l,children:"Servi\xE7os"}),e(i,{onClick:c,children:"Portf\xF3lio"}),e(i,{onClick:f,children:"Pre\xE7o"}),e(i,{onClick:m,children:"Contato"})]}),e(C,{onClick:p,children:"Pedir or\xE7amento"})]})}export{k as default};
