import styled from "styled-components";

export const Head = styled.header`
  padding: 0 ${(props) => props.theme.sizes.xxl};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg,rgba(5, 60, 77, 0.431) 0%,rgba(30, 0, 36, 0.314) 35%, rgba(2, 17, 39, 0.294) 100%);
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