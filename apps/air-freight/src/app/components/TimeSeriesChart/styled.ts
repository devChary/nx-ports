import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const ChartData = styled.div`
  background-color: var(--grayscale-0);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding-left: 48px;
  border-bottom: 1px solid var(--grayscale-200);
  h2 {
    text-transform: uppercase;
    display: inline-block;
    color: var(--grayscale-1000);
    font-size: 1.25rem;
    border-bottom: 3px solid var(--primary-color);
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EmptyStateWrap = styled.div`
  padding: 50px 100px;
`;
