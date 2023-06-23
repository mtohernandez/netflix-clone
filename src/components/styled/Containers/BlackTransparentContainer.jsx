import { styled } from "styled-components";


const BlackTransparentContainer = styled.div`
  position: relative;
  padding: 20px 30px;
  width: 50%;
  min-width: 400px;
  max-width: 700px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: left;
`;

export default BlackTransparentContainer;