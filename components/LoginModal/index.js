import ForgotPassword from "./ForgotPassword";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalTitle } from "./Modal";
import Link from "next/link";
import { useRef } from "react";
import axios from "axios";

export default function LoginModal({ props }) {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const login = async () => {
    const req = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    await axios.post("http://localhost:8000/api/login", req, {
      withCredentials: true,
    });
  };

  return (
    <Modal>
      <ModalTitle>Login to my Flexlog</ModalTitle>
      <Input type="email" placeholder="Email..." ref={inputEmail} />
      <Input type="password" placeholder="Password..." ref={inputPassword} />
      <ForgotPassword>Forgot password?</ForgotPassword>

      {/* <Link href="/dashboard"> */}
      <Button onClick={login}>Log in</Button>
      {/* </Link> */}
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
