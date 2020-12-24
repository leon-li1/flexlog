import styled from "styled-components";
import ForgotPassword from "./ForgotPassword";
import Button from "./Button";
import Input from "./Input";

const ModalTitle = styled.h2`
  color: #fff;
  align-self: flex-start;
  margin-bottom: 2em;
`;

const Modal = styled.div`
  width: 648px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 2em;
  margin: 2em 0;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

export default function LoginModal() {
  return (
    <Modal>
      <ModalTitle>Login to my Flexlog</ModalTitle>
      <Input type="email" placeholder="Email..." />
      <Input type="password" placeholder="Password..." />
      <ForgotPassword>Forgot password?</ForgotPassword>
      <Button>Log in</Button>
      <Button>Create a new account</Button>
    </Modal>
  );
}
