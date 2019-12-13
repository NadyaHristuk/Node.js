import React from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";

const modalLogin = ({ modal, onChange, loginName, toggle }) => {
  return (
    <Modal open={modal}>
      <Modal.Content>
        <Modal.Description>
          <Header>Chat</Header>
          <p>Введите своё имя, для входа в чат</p>
        </Modal.Description>
      </Modal.Content>
      <Form>
        <Form.Input
          fluid
          value={loginName}
          onChange={onChange}
          placeholder="Enter your name"
        />
        <Button fluid onClick={toggle}>
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default modalLogin;
