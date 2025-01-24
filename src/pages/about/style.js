import styled from "styled-components";

export const Portrait = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("me2.jpg");
  border-radius: 100%;
  /* border: 2px solid ${(props) => props.theme.color.secondary}; */
  border: 5px solid rgb(255, 255, 255);
`;
export const ImgBg = styled.div`
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* border: 1px solid ${(props) => props.theme.color.dark}; */
  /* border: 4px solid ${(props) => props.theme.color.secondary}; */
  border: 4px solid rgb(99, 17, 88);
  border-radius: 10px;
  height: 120px;
  width: 120px;
  /* border-radius: 45% 45% 45% 5%; */
  @media(max-width: 500px) {
    height: 75px;
    width: 75px;
  }
`;
export const FlexImgHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;