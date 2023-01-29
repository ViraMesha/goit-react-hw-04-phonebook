import PropTypes from 'prop-types';
import { FormLabel, FormInput } from './Filter.styled';
export const Filter = ({ onChange, value }) => {
  return (
    <FormLabel>
      Find contacts by name
      <FormInput type="text" onChange={onChange} value={value}></FormInput>
    </FormLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
