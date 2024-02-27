import PropTypes from 'prop-types';
import SideBar from '../SideBar/';
import OpenConversations from '../Conversations/OpenConversations';
import { useConversations } from '../Contexts/ConversationsProvider';

DashBoard.propTypes = {
    id: PropTypes.string,
};


export default function DashBoard({ id }) {

    const { selectedConversation } = useConversations()

    return (
        <div className='d-flex vh-100'>
            <SideBar title="Dashboard" id={id} />
            {selectedConversation && <OpenConversations />}
        </div>
    )
}


