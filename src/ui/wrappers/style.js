import { styled } from "styled-components";

  export const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: inset 0 -20px 20px -20px rgb(63, 152, 186); */
  /* border-bottom: 1px solid rgb(63, 152, 186); */
`;
export const GridWrap = styled.div`
  padding: 30px 10px;
  display: grid;
  grid-template-columns: 1fr 6fr;
  box-shadow: inset 0 -20px 20px -20px rgb(63, 152, 186);
  border-bottom: 1px solid rgb(63, 152, 186);
  @media(max-width: 899px) {
    grid-template-columns: auto;
  }
`;