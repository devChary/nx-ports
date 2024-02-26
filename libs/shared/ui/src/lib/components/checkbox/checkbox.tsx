import styled from 'styled-components';
import { MarketPostionProps } from '../market-position/market-position';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CheckboxInput = styled.input`
  position: relative;
  border: 2px solid #000;
  border-radius: 2px;
  background: none;
  cursor: pointer;
  line-height: 0;
  margin: 0 0.6em 0 0;
  outline: 0;
  padding: 0;
  vertical-align: text-top;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &:checked {
    background-color: #000;
    border: 2px solid #000;
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    right: 50%;
    top: 50%;
    width: 4px;
    height: 10px;
    border: 1px solid #fff;
    border-width: 0 2px 2px 0;
    margin: -1px -1px 0 -1px;
    transform: rotate(45deg) translate(-50%, -50%);
    z-index: 2;
  }
`;

interface CheckboxProps {
  id: string;
  key: string;
  data: MarketPostionProps;
  checked: boolean;
  onChange: () => void;
}

function CheckBox(props: CheckboxProps) {
  const { data, checked, onChange } = props;
  const uniqueId = `cb-${data.value}`;
  return (
    <Wrapper>
      <CheckboxInput
        id={uniqueId}
        key={uniqueId}
        value={data.value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={uniqueId}>{data.label}</label>
    </Wrapper>
  );
}

export default CheckBox;
