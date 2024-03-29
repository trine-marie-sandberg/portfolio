import styled from "styled-components";

export const SectionWrap = styled.div`
  padding: ${(props) => props.theme.sizes.xl};
  max-width: 600px;
  @media(max-width: 600px) {
    padding: ${(props) => props.theme.sizes.sm};
  }
  & a {
    color: ${(props) => props.theme.color.font};
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`;