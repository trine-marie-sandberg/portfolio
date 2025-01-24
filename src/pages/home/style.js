import styled from "styled-components";

export const SkillImg = styled.img`
  padding: 10px;
  height: 48px;
  width: auto;
  @media(max-width: 500px) {
    padding: 5px;
    height: 40px;
  }
`;
export const SkillIcon = styled.i`
  padding: 10px;
  font-size: 50px;
  color: ${(props) => props.theme.color.secondary};
  @media(max-width: 500px) {
    padding: 5px;
    font-size: 40px;
  }
`;
export const SkillsContainer = styled.div`
  max-width: 550px;
  padding: 10px;
`;
export const HeadingWrap = styled.div`
  background-image: url("sky-bg.jpg");
  border-radius: ${(props) => props.theme.sizes.borderRadius};
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid rgba(63, 151, 186, 0.582);
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
export const ProjectsContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg,#053c4d6e 0%,#1e002450 35%, #0211274b 100%);
  box-shadow: 0 -20px 20px -20px rgb(63, 152, 186);
  border-top: 1px solid rgba(63, 151, 186, 0.582);
`;
export const ProjectsHeading = styled.h2`
  font-size: 28px;
  padding: 15px;
`;