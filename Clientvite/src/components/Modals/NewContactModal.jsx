import { useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useContacts } from '../Contexts/ContactsProvider';


NewContactModal.propTypes = {
    closeModal: PropTypes.func,
};



export default function NewContactModal({ closeModal}) {

        const idRef = useRef();
        const nameRef = useRef();

        const { createContact } = useContacts();
        
        function handleSubmit(e) {
            
            e.preventDefault();
            
            createContact(idRef.current.value, nameRef.current.value);

            closeModal();
        }
        
        return (
            <div>
                <Modal.Header closeButton>Create A New Contact</Modal.Header>
                <Modal.Body>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className='mb-2'>
                                <Form.Label>Your Id Please:</Form.Label>
                                <Form.Control type='text' ref={idRef} required />
                            </Form.Group>
                            <Form.Group className='mb-4'>
                                <Form.Label>Your Name Please:</Form.Label>
                                <Form.Control type='text' ref={nameRef} required />
                            </Form.Group>
                            <Button type='submit'>Create</Button>
                        </Form>
                    </Modal.Body>
            </div>
        )
}
