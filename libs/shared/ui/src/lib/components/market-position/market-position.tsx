import styled from 'styled-components';

/* components | assets */
import CheckBox from '../checkbox/checkbox';
import { marketPositions } from '../../consts';

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 992px) {
    flex-direction: row;
  }
`;

export interface MarketPostionProps {
  value: string;
  label: string;
}

const MarketPosition = ({ checkedCheckboxes, setCheckedCheckboxes }: any) => {
  const handleCheckboxChange = (data: MarketPostionProps) => {
    const isChecked = checkedCheckboxes.some(
      (checkedCheckbox: MarketPostionProps) =>
        checkedCheckbox.value === data.value
    );
    if (isChecked) {
      setCheckedCheckboxes(
        checkedCheckboxes.filter(
          (checkedCheckbox: MarketPostionProps) =>
            checkedCheckbox.value !== data.value
        )
      );
    } else {
      setCheckedCheckboxes(checkedCheckboxes.concat(data));
    }
  };

  return (
    <CheckBoxWrapper>
      {marketPositions?.map((pos: MarketPostionProps, index: number) => (
        <CheckBox
          id={`value_${index}`}
          key={pos.value}
          data={pos}
          onChange={() => handleCheckboxChange(pos)}
          checked={checkedCheckboxes.some(
            (checkedCheckbox: MarketPostionProps) =>
              checkedCheckbox.value === pos.value
          )}
        />
      ))}
    </CheckBoxWrapper>
  );
};

export default MarketPosition;
