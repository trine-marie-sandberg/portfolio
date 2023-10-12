import styled from "styled-components";

export const Head = styled.header`
  padding: 0 ${(props) => props.theme.sizes.xxl};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -20px 20px -20px rgb(63, 152, 186);
  border-bottom: 1px solid rgb(63, 152, 186);
  @media (max-width: 600px) {
   padding: 0 ${(props) => props.theme.sizes.lg};
  }
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 120px;
  padding: ${(props) => props.theme.sizes.med};
  height: auto;
  @media (max-width: 700px) {
   max-width: 100px;
  }
`;
export const MobileMenu = styled.img`
  display: none;
  @media (max-width: 600px) {
   display: block;
  }
`;