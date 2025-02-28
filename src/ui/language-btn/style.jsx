import { styled } from "styled-components";

export const LanguageWrap = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;
export const LangText = styled.div`
  padding: 5px;
  font-size: 10px;
  margin: 0;
  color: ${(props) => props.theme.color.font};
`;
export const LangImg = styled.img`
  width: 30px;
  height: auto;
`;