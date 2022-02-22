import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Inter", sans-serif;
        

    }
    
    :root{
        --primaryPink:#ff577f;
        --primaryFocusPink:#ff427f;
        --primaryNegativePink: #59323f;
        --gray-4: #121214;
        --gray-3: #212529;
        --gray-2: #343b41;
        --gray-1: #868e96;
        --gray-0: #f8f9fa;
        --sucessPalette: #3fe864;
        --negativePalette: #e83f5b;
    }

    body{
        background: var(--gray-4);
        color: var(--gray-0);
        display:flex;
        justify-content:center
    }
    h1, h2, h3, h4{
        font-weight:bold;
    }
    button{
        cursor:pointer;
    }

    a{
        text-decoration: none;
    }
    .hidden{
        display:none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 2px 2px 0px 1000px #343b41 inset;
  box-shadow: 2px 2px 0px 1000px #343b41 inset;
}
`;
