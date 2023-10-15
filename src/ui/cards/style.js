import styled from "styled-components";

export const CardWrap = styled.button`
  color: ${(props) => props.theme.color.light};
  font-size: 20px;
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 5px;
  margin: 10px;
  padding: 0;
  border: 1px solid ${(props) => props.theme.color.secondary};
  cursor: pointer;
  @media(max-width: 450px) {
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
  display: flex;
  flex-wrap: wrap;
  button:hover {
    animation-name: glow;
    animation-duration: 1.5s;
    box-shadow: rgba(113, 198, 231, 0.76) 0px 7px 29px 0px;
  }
`;
export const LinksWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    color: ${(props) => props.theme.color.secondary};
    font-size: 30px;
    & :hover {
      color: ${(props) => props.theme.color.light};
    }
  }
`;