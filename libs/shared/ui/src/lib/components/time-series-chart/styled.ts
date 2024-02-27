import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media screen and (max-width: 920px) {
    flex-wrap: wrap-reverse;
  }
`;

export const FreightInterface = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
