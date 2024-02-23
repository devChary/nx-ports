import styled from 'styled-components';

import { CheckBox } from '@nx-ports/shared-ui';

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export interface MarketPostion {
  value: string;
  label: string;
}

export const marketPositions = [
  {
    value: 'high',
    label: 'Market High',
  },
  {
    value: 'mid-high',
    label: 'Market Mid-High',
  },
  {
    value: 'average',
    label: 'Market Average',
  },
  {
    value: 'mid-low',
    label: 'Market Mid-Low',
  },
  {
    value: 'low',
    label: 'Market Low',
  },
];

const MarketPosition = ({ checkedCheckboxes, setCheckedCheckboxes }: any) => {
  const handleCheckboxChange = (data: MarketPostion) => {
    const isChecked = checkedCheckboxes.some(
      (checkedCheckbox: MarketPostion) => checkedCheckbox.value === data.value
    );
    if (isChecked) {
      setCheckedCheckboxes(
        checkedCheckboxes.filter(
          (checkedCheckbox: MarketPostion) =>
            checkedCheckbox.value !== data.value
        )
      );
    } else {
      setCheckedCheckboxes(checkedCheckboxes.concat(data));
    }
  };

  return (
    <CheckBoxWrapper>
      {marketPositions?.map((pos) => (
        <CheckBox
          data={pos}
          onChange={() => handleCheckboxChange(pos)}
          checked={checkedCheckboxes.some(
            (checkedCheckbox: MarketPostion) =>
              checkedCheckbox.value === pos.value
          )}
        />
      ))}
    </CheckBoxWrapper>
  );
};

export default MarketPosition;
