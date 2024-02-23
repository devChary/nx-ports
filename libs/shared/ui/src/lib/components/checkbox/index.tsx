export interface EmptyStateProps {
  data: any;
  checked: boolean;
  onChange: () => void;
}

function CheckBox(props: any) {
  const { data, checked, onChange } = props;
  return (
    <label htmlFor={data.value}>
      <input
        key={`cb-${data.value}`}
        value={data.value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {data.label}
    </label>
  );
}

export default CheckBox;
