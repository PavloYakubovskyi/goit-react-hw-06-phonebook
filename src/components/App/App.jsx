import { useSelector } from 'react-redux';
import { Container, SubTitle, Title } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getAllContacts } from 'redux/contactsSlice';

export default function App() {
  const allContacts = useSelector(getAllContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {allContacts.contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
      )}
    </Container>
  );
}
