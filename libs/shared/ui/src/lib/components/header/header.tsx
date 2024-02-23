import styled from 'styled-components';

interface HeaderProps {
  freightLabel: string;
  themeColor: string;
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

const Header = (props: HeaderProps) => {
  const { themeColor, freightLabel } = props;
  return (
    <Wrapper>
      <h1 style={{ color: themeColor }}>{freightLabel} Freight</h1>
    </Wrapper>
  );
};

export default Header;
