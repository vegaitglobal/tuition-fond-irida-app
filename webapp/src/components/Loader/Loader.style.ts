import styled from "styled-components";

export const StyledLoader = styled.div<{ center: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.center ? "100vh" : "auto")};
  & div {
  width: 48px;
  height: 48px;
  border: 5px solid ${(props) => props.theme.colors.primary.main};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
