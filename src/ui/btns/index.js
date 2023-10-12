import styled from "styled-components";
//Primary
export const BtnPrimary = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.color.light};
  border: 1px solid ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.black};
  border-radius: 5px;
  font-size: 18px;
  padding: 2px;
  margin: 5px;
  cursor: pointer;
  & :hover {
    box-shadow: rgba(63, 152, 186, 0.5) 0px 7px 20px 0px;
    border-radius: 5px;
  }
  & button {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.color.light};
    border: none;
    color: ${(props) => props.theme.color.black};
    font-size: 18px;
    padding: 5px 15px;
    width: 100%;
    cursor: pointer;
  }
  & a {
    margin: 0;
    background-color: ${(props) => props.theme.color.light};
    color: ${(props) => props.theme.color.black};
    font-size: 18px;
    padding: 5px 15px;
    text-decoration: none !important;
    display: block;
  }
`;
//Secondary
export const BtnSecondary = styled.div`
  width: fit-content;
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.font};
  border-radius: 5px;
  font-size: 18px;
  padding: 2px;
  margin: 5px;
  cursor: pointer;
  & :hover {
    box-shadow: rgba(63, 152, 186, 0.5) 0px 7px 20px 0px;
    border-radius: 5px;
  }
  & button {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.color.primary};
    border: none;
    color: ${(props) => props.theme.color.font};
    font-size: 18px;
    padding: 5px 15px;
    cursor: pointer;
  }
  & a {
    margin: 0;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.font};
    font-size: 18px;
    padding: 5px 15px;
    text-decoration: none !important;
    display: block;
  }
`;