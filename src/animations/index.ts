import { keyframes } from "styled-components";

const animationUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
    
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const animationText = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

export { animationUp, animationText };
