import { styled } from "styled-components";

const LoadingBall = styled.div`
  --size: 20px;
  --timing: 0.7s;
  --displace: 70px;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background: #000;
  margin-right: var(--displace);
  animation: animation321 var(--timing) infinite alternate cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @keyframes animation321 {
    0% {
      background: #DB202C;
      transform: translateX(var(--displace));
     }
    
     100% {
      background: #DEDEDE;
      transform: translateX(00px);
     }
  }
`;

export default LoadingBall;