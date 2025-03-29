import styled from "styled-components";

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: radial-gradient(circle at 65% 15%, white 1px, rgba(171, 245, 255, 0.53) 3%, rgba(0, 14, 36, 0.56) 60%, rgba(55, 91, 105, 0.55) 100%); */
`;
export const Form = styled.form`
position: relative;
  /* border: 1px solid ${(props) => props.theme.color.secondary}; */
  /* box-shadow: inset 0 -20px 30px -20px rgb(63, 152, 186); */
  width: 60%;
  padding: 20px;
  margin: 50px auto;
  border: 1px solid ${(props) => props.theme.color.font};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center it */
  width: min(50vw, 400px); /* Bigger, but still responsive */
  aspect-ratio: 1 / 1; /* Keeps it a square */
  
  /* STAR SHAPE */
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 
    68% 57%, 79% 91%, 50% 70%, 
    21% 91%, 32% 57%, 2% 35%, 39% 35%
  );

  background: radial-gradient(
    circle at 65% 15%,
    white 1px,
    rgba(63, 151, 186, 0.53) 3%,
    rgba(0, 14, 36, 0.56) 60%,
    rgba(63, 151, 186, 0.55) 100%
  );
`;
export const Heading = styled.h1`
  padding: 0px;
  margin: 0px;
  margin-bottom: 70px;
`;
export const Input = styled.input`
padding: 5px;
margin: 15px 0;
z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.font};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Submit = styled.button`
margin-top: 20px;
  padding: 10px 5vw;
  border: 1px solid ${(props) => props.theme.color.font};
  border-radius: 5px;
  background-color: rgba(63, 151, 186, 0.16);
  color: ${(props) => props.theme.color.font};
  cursor: pointer;
  & :hover {
    background-color: rgba(63, 151, 186, 0.71);
  }
`;