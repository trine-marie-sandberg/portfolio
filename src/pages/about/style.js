import styled from "styled-components";

export const Portrait = styled.div`
  background-size: contain;
  background-image: url("/me.jpg");
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.dark};
`;
export const ImgBg = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid ${(props) => props.theme.color.dark};
  /* border: 2px solid ${(props) => props.theme.color.secondary}; */
  height: 150px;
  width: 150px;
  border-radius: 10%;
  /* border-radius: 45% 45% 45% 5%; */
  @media(max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;
export const FlexImgHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;