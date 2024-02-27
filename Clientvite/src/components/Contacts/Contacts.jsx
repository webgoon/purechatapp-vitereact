
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContactsProvider';

export default function Contacts() {
    
    const { contacts } = useContacts()

    return (
        <ListGroup variant="flush">
           {contacts.map(contact => (
              <ListGroup.Item key={contact.id}>
                {contact.name}
              </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
