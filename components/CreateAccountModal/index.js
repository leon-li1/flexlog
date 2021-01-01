import { Button } from "../LoginModal/Button";
import { Input } from "../Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import useErrorMsg from "../../hooks/useErrorMsg";
import axios from "axios";

const CreateAccountModal = () => {
  const [data, setData] = useState({});
  const [error, triggerErr] = useErrorMsg();
  const router = useRouter();

  const signUp = async () => {
    try {
      await axios.post(`${process.env.SERVER_URL}/api/users/add`, data);
      await axios.post(
        `${process.env.SERVER_URL}/api/login`,
        { email: data.email, password: data.password },
        { withCredentials: true }
      );
      router.push("/dashboard");
    } catch (err) {
      switch (err.response.data) {
        case '"name" is not allowed to be empty':
          return triggerErr("Name is required");
        case '"name" length must be less than or equal to 15 characters long':
          return triggerErr("Name is too long");
        case '"email" must be a valid email':
          return triggerErr("Invalid email entered");
        case '"password" length must be at least 4 characters long':
          return triggerErr("Password is too short");
        case '"passwordConfirm" must be [ref:password]':
          return triggerErr("Passwords don't match");
        default:
          return triggerErr(err.response.data);
      }
    }
  };

  return (
    <Modal>
      {error}
      <ModalTitle>Create a new account</ModalTitle>
      <Input
        type="text"
        placeholder="Name..."
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Input
        type="email"
        placeholder="Email..."
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Password..."
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <Input
        type="password"
        placeholder="Confirm password..."
        value={data.passwordConfirm}
        onChange={(e) => setData({ ...data, passwordConfirm: e.target.value })}
      />
      <Button onClick={async () => await signUp()}>Sign Up</Button>
    </Modal>
  );
};

export default CreateAccountModal;
