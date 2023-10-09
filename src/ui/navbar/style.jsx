import styled from "styled-components";

export const Nav =  styled.nav`
  color: ${(props) => props.theme.color.font};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 600px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: ${(props) => props.theme.color.primary};
    border-bottom: 2px solid ${(props) => props.theme.color.light};;
  }
`;
export const Head = styled.header`
  padding: ${(props) => props.theme.sizes.sm};
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.color.primary};
`;
export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 5px;
  @media (max-width: 600px) {
   display: none;
  }
`;
export const Li = styled.li`
  margin: ${(props) => props.theme.sizes.sm};
  & p {
    border: 1px solid rgba(69, 152, 186, 0.2);
    border-radius: 8px;
    padding: 5px 15px;
    margin: 0;
  }
  & :hover {
    box-shadow: 1px 2px 30px rgba(63, 151, 186, 0.39);
  }
  & :hover p {
    border: 1px solid rgba(69, 152, 186, 0.6);
    color: ${(props) => props.theme.color.light};
  }
  & a {
    font-size: ${(props) => props.theme.sizes.med};
    font-weight: 200;
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
  }
  cursor: pointer;
`;
export const I = styled.i`
  font-size: ${(props) => props.theme.sizes.med};
  padding: ${(props) => props.theme.sizes.sm};
  color: ${(props) => props.theme.color.font};
  @media (max-width: 800px) {
   padding: ${(props) => props.theme.sizes.xs};
  }
`;
//https://codepen.io/shephero/pen/LYVrdjX
//https://css-tricks.com/transforms-on-svg-elements/
export const MenuIconWrap = styled.i`
  z-index: 2;
  cursor: pointer;
  display: none;
  @media (max-width: 600px) {
   display: block;
  }
`;