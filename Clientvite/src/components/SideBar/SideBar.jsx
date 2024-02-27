
import PropTypes from 'prop-types'; // Import PropTypes
import { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from '../Conversations';
import Contacts from '../Contacts/';
import NewConversationModal from '../Modals/NewConversationModal';
import NewContactModal from '../Modals/NewContactModal';

SideBar.propTypes = {
    id: PropTypes.func.isRequired,
};


const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY =    'contacts'

SideBar.propTypes = {
    id: PropTypes.string
};

export default function SideBar({ id }) {


    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY


    function closeModal(){
        setModalOpen(false)
    }

    return (
        <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container
                activeKey={activeKey}
                onSelect={setActiveKey}
            >
                

                <Nav variant="tabs" className='justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  eventKey={CONTACTS_KEY}>
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content 
                    className="border-end border-bottom border-1 overflow-auto flex-grow-1">

                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>

                <div className='p-2 border border-bottom-0 small'>
                    Your Id: <span className='text-muted'>{id}</span>
                </div>
                
                <Button onClick={() => setModalOpen(true)} variant={"primary"} className='rounded-0'>
                    New {conversationsOpen ? 'Conversations' : 'Contact'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ? 
                    <NewConversationModal closeModal={closeModal} />
                    : 
                    <NewContactModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    )
}
