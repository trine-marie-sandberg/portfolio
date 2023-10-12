import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: rgb(20, 20, 24);
    --color-secondary: rgb(69, 162, 197);
    --color-font: white;
    --color-font-black: rgb(6, 44, 67);
    --color-warning: #301313;
    --color-contrast-light: rgb(113, 198, 231);
    --color-contrast-dark: rgb(24, 43, 51);
    --color-contrast-darker: rgb(15, 27, 32);
    --color-black: rgb(8, 8, 8);
    --color-border: rgb(4, 43, 61);

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
  .active p {
    color: rgb(146, 224, 255) !important;
    border-bottom: 1px solid rgb(146, 224, 255) !important;
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
`;

export default GlobalStyle;