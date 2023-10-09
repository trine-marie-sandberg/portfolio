import styled from "styled-components";

export const Head = styled.header`
  padding: 0 ${(props) => props.theme.sizes.xxl};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
   padding: 0 ${(props) => props.theme.sizes.lg};
  }
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 100px;
  padding: ${(props) => props.theme.sizes.med};
  height: auto;
  @media (max-width: 600px) {
   max-width: 120px;
  }
`;
export const MobileMenu = styled.img`
  display: none;
  @media (max-width: 600px) {
   display: block;
  }
`;