
import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useContacts } from '../Contexts/ContactsProvider';
import { useConversations } from '../Contexts/ConversationsProvider'


NewConversationModal.propTypes = {
    closeModal: PropTypes.func,
};

export default function NewConversationModal({ closeModal }) {

    const [ selectedContactIds, setSelectedContactIds ] = useState([])
    
    const { contacts } = useContacts()

    const { createConversation } = useConversations()

    function handleSubmit(e){
        e.preventDefault();

        createConversation(selectedContactIds)
        closeModal()
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {

          if (prevSelectedContactIds.includes(contactId)) {

            return prevSelectedContactIds.filter(prevId => {
                
              return contactId !== prevId

            })
            
          } else {

            return [...prevSelectedContactIds, contactId]

          }
        })
      }

   
    return (
            <div>
                <Modal.Header closeButton>Create A New Conversation</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} >
                      

                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check
                            type="checkbox"
                            value={selectedContactIds.includes(contact.id)}
                            label={contact.name}
                            onChange={() => handleCheckboxChange(contact.id)}
                        />
                        </Form.Group>
                    ))}


                    <Button type='submit'>Create</Button>

                    </Form>
                </Modal.Body>
            </div>
    )
}
