import styled from "styled-components";

export const Head = styled.header`
  padding: 0 ${(props) => props.theme.sizes.xxl};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg,#053c4d6e 0%,#1e002450 35%, #0211274b 100%);
  /* box-shadow: inset 0 -20px 20px -20px rgb(63, 152, 186); */
  border-bottom: 1px solid rgba(63, 151, 186, 0.582);
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  min-height: 100px;
  @media (max-width: 600px) {
   padding: 0 ${(props) => props.theme.sizes.lg};
  }
`;
export const Logo = styled.img`
  width: 100%;
  max-width: 110px;
  height: auto;
  padding-top: ${(props) => props.theme.sizes.med};
  @media (max-width: 700px) {
   max-width: 90px;
  }
`;
export const MobileMenu = styled.img`
  display: none;
  @media (max-width: 600px) {
   display: block;
  }
`;