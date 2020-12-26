import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";
import { useState } from "react";
import axios from "axios";

const CreateAccountModal = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const signUp = async () => {
    await axios.post("http://localhost:8000/api/users/add", text);
    alert(text);
  };

  const handleChange = (event) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  return (
    <Modal>
      <ModalTitle>Create a new account</ModalTitle>
      <Input
        name="name"
        type="text"
        placeholder="Name..."
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email..."
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password..."
        onChange={handleChange}
      />
      <Input
        name="passwordConfirm"
        type="password"
        placeholder="Confirm password..."
        onChange={handleChange}
      />
      <Button onClick={() => signUp()}>Sign Up</Button>
    </Modal>
  );
};

export default CreateAccountModal;
