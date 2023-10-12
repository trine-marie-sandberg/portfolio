import styled from "styled-components";

export const SkillImg = styled.img`
  padding: 10px;
  height: 48px;
  width: auto;
`;
export const SkillIcon = styled.i`
  padding: 10px;
  font-size: 50px;
  color: ${(props) => props.theme.color.secondary};
`;
export const HeadingWrap = styled.div`
  background-image: url("/sky-bg.jpg");
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-size: cover;
  background-repeat: no-repeat;
  /* border: 1px solid ${(props) => props.theme.color.secondary}; */
  & i {
    font-size: 45px;
  }
  & h1 {
    margin-top: 0;
  }
`;
export const HeadingBgContrast = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 25px;
  border-radius: ${(props) => props.theme.sizes.borderRadius};
`;