import {
  Label,
  Input,
} from '../Styled/Styled';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search by name or phone..."
      />
    </Label>
  );
}

export default Filter;