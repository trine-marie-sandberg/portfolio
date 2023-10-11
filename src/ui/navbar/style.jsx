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
    border-bottom: 1px solid rgba(69, 152, 186, 0);
    padding: 5px 15px;
    margin: 0;
  }
  & :hover {
    text-shadow: rgb(146, 224, 255) 0 0 30px;
    border-bottom: 1px solid rgba(69, 152, 186, 0.6);
  }
  & :hover p {
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

export const MenuIconWrap = styled.i`
  z-index: 2;
  cursor: pointer;
  display: none;
  @media (max-width: 600px) {
   display: block;
  }
`;