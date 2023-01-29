import PropTypes from 'prop-types';
import { ContactInformation, ContactDeleteBtn } from './ContactListItem.styled';

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <ContactInformation>
      <div>
        {name}: {number}
      </div>
      <ContactDeleteBtn onClick={onDelete}>Delete</ContactDeleteBtn>
    </ContactInformation>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
