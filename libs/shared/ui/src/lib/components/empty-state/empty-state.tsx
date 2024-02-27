import styled from 'styled-components';

/* assets */
import EmptyStateIcon from '../../assets/empty_folder.png';

const EmptyStateWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 360px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  margin: 20px 0;
  padding: 50px 100px;
  background: rgba(247, 247, 246, 0.5);
  img {
    width: 75px;
    margin: 0 0 24px;
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 8px;
  }
`;

/* eslint-disable-next-line */
export interface EmptyStateProps {
  title: string;
  subTitle: string;
}

export function EmptyState(props: EmptyStateProps) {
  const { title, subTitle } = props;
  return (
    <EmptyStateWrap>
      <img alt="Empty State Icon" src={EmptyStateIcon} />
      {title && <h3>{title} </h3>}
      {subTitle && <p>{subTitle}</p>}
    </EmptyStateWrap>
  );
}

export default EmptyState;
