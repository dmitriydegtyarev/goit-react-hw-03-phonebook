import PropTypes from 'prop-types';

import { FilterName } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterName>
      <label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onChange(target.value)}
          placeholder="Enter name for Search"
        />
        Find contact by name
      </label>
    </FilterName>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
