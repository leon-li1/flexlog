import ForgotPassword from "./ForgotPassword";
import { Button } from "./Button";
import { Input } from "./Input";
import { Modal, ModalTitle } from "./Modal";
import { useRouter } from "next/router";
import { useRef } from "react";
import axios from "axios";
import useErrorMsg from '../../hooks/useErrorMsg';

export default function LoginModal({ setState }) {
  const router = useRouter();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [error, trigger] = useErrorMsg();

  const login = async () => {
    try {
      const req = {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      };
      await axios.post("http://localhost:8000/api/login", req, {
        withCredentials: true,
      });
      router.push("/dashboard");
    } catch(err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  return (
    <Modal>
      {error}
      <ModalTitle>Login to my Flexlog</ModalTitle>
      <Input type="email" placeholder="Email..." ref={inputEmail} />
      <Input type="password" placeholder="Password..." ref={inputPassword} />
      <ForgotPassword>Forgot password?</ForgotPassword>

      <Button onClick={login}>Log in</Button>
      <Button
        onClick={() => {
          setState("CreateAccount");
        }}
      >
        Create a new account
      </Button>
    </Modal>
  );
}
