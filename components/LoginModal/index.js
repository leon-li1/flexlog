import ForgotPassword from "./ForgotPassword";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalTitle } from "./Modal";
import Link from "next/link";

export default function LoginModal({ props }) {
  return (
    <Modal>
      <ModalTitle>Login to my Flexlog</ModalTitle>
      <Input type="email" placeholder="Email..." />
      <Input type="password" placeholder="Password..." />
      <ForgotPassword>Forgot password?</ForgotPassword>

      <Link href="/dashboard">
        <Button onClick={() => console.log("hi")}>Log in</Button>
      </Link>
      <Button
        onClick={() => {
          props("CreateAccount");
        }}
      >
        Create a new account
      </Button>
    </Modal>
  );
}
