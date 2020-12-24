import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";

export default function CreateAccountModal() {
  return (
    <Modal>
      <ModalTitle>Create a new account</ModalTitle>
      <Input type="text" placeholder="Name..." />
      <Input type="email" placeholder="Email..." />
      <Input type="password" placeholder="Password..." />
      <Input type="password" placeholder="Confirm password..." />
      <Button onClick={() => alert("hi")}>Sign Up</Button>
    </Modal>
  );
}
