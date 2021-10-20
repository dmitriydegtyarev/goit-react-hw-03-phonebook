import PropTypes from 'prop-types';

import { Item } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <Item>
      <button onClick={() => onRemove(id)}>delete</button>
      {name}: {number}
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
