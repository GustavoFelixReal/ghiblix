import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  width: 100%;

  svg {
    width: 15%;

    @media screen and (max-width: 768px) {
      width: 35%;
    }
  }

  button {
    margin-top: 10px;
    width: fit-content;
  }
`;
