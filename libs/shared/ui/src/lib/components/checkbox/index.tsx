import styled from 'styled-components';
export interface EmptyStateProps {
  data: any;
  checked: boolean;
  onChange: () => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

function CheckBox(props: any) {
  const { data, checked, onChange } = props;
  const uniqueId = `cb-${data.value}`;
  return (
    <Wrapper>
      <input
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
