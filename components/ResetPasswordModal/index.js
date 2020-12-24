import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";

export default function ResetPasswordModal() {
  return (
    <Modal>
      <ModalTitle>Reset my password</ModalTitle>
      <Input type="email" placeholder="Email..." />
      <Button onClick={() => alert("hi")}>Send code</Button>
    </Modal>
  );
}
