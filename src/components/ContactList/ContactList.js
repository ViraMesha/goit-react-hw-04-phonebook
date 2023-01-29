import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import { ContactsList } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
