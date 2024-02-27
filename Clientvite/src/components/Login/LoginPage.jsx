

import { useRef } from 'react'

import { Container, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

import { v4 as uuidV4 } from 'uuid'


const LoginPage = ({ onIdSubmit }) => {

    const idRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Clicked handled Submit', idRef.current.value)

        onIdSubmit(idRef.current.value)
    }

    function createNewId(){

        var NewUuidV4 = uuidV4()

       console.log('Clicked craete new Id Submit NewUuidV4: ', NewUuidV4)
       
       onIdSubmit(NewUuidV4)


    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh'}}>
           <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="me-2">Login</Button>
                <Button  onClick={createNewId} variant='secondary' className='ml-2'>Create New Id</Button>
           </Form>
        </Container>
    )
}

LoginPage.propTypes = {
    onIdSubmit: PropTypes.func.isRequired,
};

export default LoginPage