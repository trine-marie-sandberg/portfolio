import styled from "styled-components";

export const CardWrap = styled.button`
  color: ${(props) => props.theme.color.light};
  font-size: 20px;
  width: 350px;
  height: 350px;
  background-color: rgba(0, 0, 15, 0.5);
  border-radius: 10px;
  margin: 20px;
  padding: 0;
  border: none;
  border: 4px solid ${(props) => props.theme.color.border};
  box-shadow: 
    -20px -20px 30px -25px rgba(0, 231, 255, 0.2), 
    20px 20px 30px -25px rgba(255, 0, 231, 0.2), 
    -7px -7px 10px -5px rgba(0, 231, 255, 0.2), 
    7px 7px 10px -5px rgba(255, 0, 231, 0.2), 
    0 0 13px 4px rgba(255,255,255,0.2),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  @media(max-width: 450px) {
    width: 250px;
  }
  @media(max-width: 320px) {
    width: 200px;
  }
`;
export const InnerBorder = styled.div`
  border: 1px solid ${(props) => props.theme.color.secondary};
  border-radius: 10px;
  height: 99%;
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
    /* box-shadow: rgba(113, 198, 231, 0.76) 0px 7px 29px 0px; */
    /* transform: translate3d(0, 0, 0.01px) rotateY(-20deg) rotateX(5deg) */
    box-shadow:  
      20px 20px 30px -25px rgb(189, 0, 170), 
      -20px -20px 30px -25px rgb(0, 231, 255),
      7px 7px 10px -5px rgb(189, 0, 170), 
      -7px -7px 10px -5px rgb(0, 231, 255), 
      0 0 13px 4px rgba(255,255,255,0.2),
      0 55px 35px -20px rgba(0, 0, 0, 0.5);
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