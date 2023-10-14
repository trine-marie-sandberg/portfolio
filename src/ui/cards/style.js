import styled from "styled-components";

export const CardWrap = styled.button`
  z-index: 5;
  color: ${(props) => props.theme.color.light};
  font-size: 20px;
  width: 350px;
  height: 300px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;
  margin: 10px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.color.secondary};
  cursor: pointer;
  @media(max-width: 400px) {
    width: 250px;
  }
  @media(max-width: 320px) {
    width: 200px;
  }
`;
export const CardBack = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
`;
export const ProjectTitle = styled.h3`
  padding: 5px;
`;
export const ProjectImg = styled.img`
  height: auto;
  max-height: 150px;
  width: 100%;
`;
export const CardsWrap = styled.div`
  height: fit-content;
`;
export const LinksWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    color: ${(props) => props.theme.color.secondary};
    & :hover {
      color: ${(props) => props.theme.color.light};
    }
  }
`;