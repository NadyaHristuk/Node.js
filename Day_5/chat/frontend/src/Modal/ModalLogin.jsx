import React from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

const ModalLogin = ({modal, handlerChange, loginName, toggleModal}) => {
    return (
        <div>
         <Modal open={modal}>
         <Modal.Content>
          <Modal.Description>
          <Header>Chat</Header>
            <p>Для входа в чат, введите свое имя</p>
          </Modal.Description>
         </Modal.Content>
         <Form success>
          <Form.Input onChange={handlerChange} value={loginName} placeholder='Enter you name' />
           <Button fluid onClick={toggleModal}>Submit</Button>
          </Form>
         </Modal>
        </div>
    );
};

export default ModalLogin;