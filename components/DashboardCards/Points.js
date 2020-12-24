import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";

export default function PointsCard() {
  return (
    <Modal>
      <ModalTitle>Create a new account</ModalTitle>
      <Input type="text" placeholder="Name..." />
      <Button onClick={() => alert("hi")}>Sign Up</Button>
    </Modal>
  );
}
