import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";
import { useState, useRef } from "react";
import axios from "axios";
import useErrorMsg from '../../hooks/useErrorMsg';
import { useRouter } from 'next/router';

const CreateAccountModal = ({ setState }) => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();
  const [error, triggerErr] = useErrorMsg();
  const router = useRouter();

  const signUp = async () => {
    const req = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      passwordConfirm: inputConfirmPassword.current.value,
    };

    try {
      const res = await axios.post("http://localhost:8000/api/users/add", req);
      // TODO: this should just log them in wtf
      // router.push('/dashboard')
      setState("Login");
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
      <Input type="text" placeholder="Name..." ref={inputName} />
      <Input type="email" placeholder="Email..." ref={inputEmail} />
      <Input type="password" placeholder="Password..." ref={inputPassword} />
      <Input
        type="password"
        placeholder="Confirm password..."
        ref={inputConfirmPassword}
      />
      <Button onClick={async () => await signUp()}>Sign Up</Button>
    </Modal>
  );
};

export default CreateAccountModal;
