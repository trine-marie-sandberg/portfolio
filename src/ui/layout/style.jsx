import { styled } from "styled-components";

export const Main = styled.main`
  all: unset;
  display: block;
  color: ${(props) => props.theme.color.font};
`;

export const Wrapper = styled.div`
  background-color: var(--color-primary);
  /* background-image: linear-gradient(rgb(6, 44, 67) 60%, rgb(53, 125, 136)); */
  /* background-image: linear-gradient(${(props) => props.theme.color.black} 10%, ${(props) => props.theme.color.primary} 40%, ${(props) => props.theme.color.dark}); */
  background-color: rgb(0, 5, 7);
  display: grid;
  grid-template-rows: 1fr 7.5fr 0.5fr;
  height: 100vh;
  overflow-y: scroll;
`;