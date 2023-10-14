import styled from "styled-components";

export const CardWrap = styled.button`
  width: 350px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;
  margin: 10px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.color.secondary};
  @media(max-width: 400px) {
    width: 250px;
  }
  @media(max-width: 320px) {
    width: 200px;
  }
`;
export const ProjectTitle = styled.h3`
  padding: 5px;
  color: ${(props) => props.theme.color.light};
`;
export const ProjectImg = styled.img`
  height: auto;
  max-height: 150px;
  width: 100%;
`;
export const CardsWrap = styled.div``;