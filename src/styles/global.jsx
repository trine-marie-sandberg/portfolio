import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: rgb(20, 20, 24);
    --color-secondary: rgb(69, 162, 197);
    --color-contrast-dark-theme: rgb(113, 198, 231);
    --color-gradient1-dark-theme: #031a23;
    --color-gradient2-dark-theme: #080410;
    --color-gradient3-dark-theme: #021127

    --color-secondary-light-theme: rgb(2, 15, 20);
    --color-contrast-light-theme: rgb(214, 247, 255);
    --color-gradient1-light-theme: #8AA4AD;
    --color-gradient2-light-theme: #AAA8B5;
    --color-gradient3-light-theme: #A6B0B9;
    
    --color-font: white;
    --color-font-black: rgb(6, 44, 67);
    --color-warning: #301313;
    --color-contrast-dark: rgb(24, 43, 51);
    --color-contrast-darker: rgb(15, 27, 32);

    --color-contrast-light: rgb(113, 198, 231);
    --color-black: rgb(8, 8, 8);
    --color-border: rgb(4, 43, 61);
    --color-cyan: rgb(113, 198, 231);
    --color-white: rgb(255, 255, 255);
    --color-sky: rgb(235, 243, 247);
    --color-black: rgb(0, 5, 7);
    --color-dark-grey: rgb(20, 20, 24);
    --color-neon-blue: rgba(63, 151, 186, 0.582);
    --color-neon-blue-light: rgba(69, 162, 197, 1);
    --color-blue-dark: rgb(4, 43, 61);

    --sizes-xs: 5px;
    --sizes-sm: 1rem;
    --sizes-med: 1.5rem;
    --sizes-lg: 2rem;
    --sizes-xl: 3rem;
    --sizes-xxl: 4rem;

    --sizes-card: 250px;
    --sizes-border-radius: 10px;
  }
  body {
    all: unset;
    display: block;
    font-family: "finalsix", sans-serif;
    font-weight: 300;
    font-style: normal;
    overflow-y: scroll;
    overflow-y: hidden;
    scrollbar-color: var(--color-secondary) var(--color-black);
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-black);
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.secondary};
    }
  }
  h1 {
    font-family: "stevie-sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  h2 {
    font-weight: 300;
  }
  button {
    font-family: "finalsix", sans-serif;
    font-weight: 400;
  }
  /* .active p {
    color: rgb(146, 224, 255) !important;
    border-bottom: 1px solid rgb(146, 224, 255) !important;
  } */
  .active p {
    border-bottom: 1px solid;
  } 
  li p :hover {
    animation-name: underline;
    animation-duration: 2s;
  }
  #visible {
    display: block;
  }
  //Animation keyframes
@keyframes underline {
  0% {border-bottom: 1px solid rgb(30, 45, 51)}
  10% {border-bottom: 1px solid rgb(51, 77, 87)}
  30% {border-bottom: 1px solid rgb(113, 172, 196)}
  50% {border-bottom: 1px solid rgb(146, 224, 255)}
  60% {border-bottom: 1px solid rgb(146, 224, 255)}
  70% {border-bottom: 1px solid rgb(113, 172, 196)}
  90% {border-bottom: 1px solid rgb(51, 77, 87)}
  100% {border-bottom: 1px solid rgb(30, 45, 51)}
}
@keyframes glow{
    from {
      box-shadow: 
      -20px -20px 30px -25px rgba(0, 231, 255, 0.2), 
      20px 20px 30px -25px rgba(255, 0, 231, 0.2), 
      -7px -7px 10px -5px rgba(0, 231, 255, 0.2), 
      7px 7px 10px -5px rgba(255, 0, 231, 0.2), 
      0 0 13px 4px rgba(255,255,255,0.2),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
    }
    to {
      box-shadow:  
      20px 20px 30px -25px rgb(189, 0, 170), 
      -20px -20px 30px -25px rgb(0, 231, 255),
      7px 7px 10px -5px rgb(189, 0, 170), 
      -7px -7px 10px -5px rgb(0, 231, 255), 
      0 0 13px 4px rgba(255,255,255,0.2),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
    }
}
`;

export default GlobalStyle;