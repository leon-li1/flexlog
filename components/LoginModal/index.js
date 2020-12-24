import styled from "styled-components";
import ForgotPassword from "./ForgotPassword";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalTitle } from "./Modal";

export default function LoginModal() {
  return (
    <Modal>
      <ModalTitle>Login to my Flexlog</ModalTitle>
      <Input type="email" placeholder="Email..." />
      <Input type="password" placeholder="Password..." />
      <ForgotPassword>Forgot password?</ForgotPassword>
      <Button onClick={() => alert("hi")}>Log in</Button>
      <Button>Create a new account</Button>
    </Modal>
  );
}
