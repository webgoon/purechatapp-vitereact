
//import '../index.css'


import Login from "./Login"
import DashBoard from "./Dashboard"
import useLocalStorage from "../hooks/useLocalStorage"
import { SocketProvider } from '../components/Contexts/SocketProvider'
import { ContactsProvider } from '../components/Contexts/ContactsProvider'
import { ConversationsProvider } from '../components/Contexts/ConversationsProvider';

function App() {
    const [id, setId] = useLocalStorage('id')


    const dashboard = (
      <SocketProvider id={id}>

        <ContactsProvider>

          <ConversationsProvider id={id}>
            
            <DashBoard id={id} />

          </ConversationsProvider>

        </ContactsProvider>
        
      </SocketProvider>
    )

    // const dashboard = (
    //       <ContactsProvider>

    //         <ConversationsProvider id={id}>
    //           <DashBoard id={id} />
    //         </ConversationsProvider>
            
    //       </ContactsProvider>
    // )

    
  return (
    <> 
        {id  ? dashboard : <Login onIdSubmit={setId} />}
    </>
  )
}

export default App
