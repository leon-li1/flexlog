import styled from "styled-components";
import { Button } from "../LoginModal/Button";
import { Input } from "../LoginModal/Input";
import { Modal, ModalTitle } from "../LoginModal/Modal";
import { useState, useRef } from "react";
import axios from "axios";

const CreateAccountModal = ({ props }) => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputConfirmPassword = useRef();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const signUp = async () => {
    const req = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      passwordConfirm: inputConfirmPassword.current.value,
    };

    try {
      const res = await axios.post("http://localhost:8000/api/users/add", req);
      props("Login");
    } catch (err) {
      switch (err.response.data) {
        case '"name" is not allowed to be empty':
          setErrorMsg("Name is required");
          return setError(true);
        case '"name" length must be less than or equal to 15 characters long':
          setErrorMsg("Name is too long");
          return setError(true);
        case '"email" must be a valid email':
          setErrorMsg("Invalid email entered");
          return setError(true);
        case '"password" length must be at least 4 characters long':
          setErrorMsg("Password is too short");
          return setError(true);
        case '"passwordConfirm" must be [ref:password]':
          setErrorMsg("Passwords don't match");
          return setError(true);
      }
    }
  };

  // const handleChange = (event) => {
  //   setText({ ...text, [event.target.name]: event.target.value });
  // };

  return (
    <Modal>
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
      <button onClick={() => setError(!error)}>toggle</button>
      <ErrorContainer isVisible={error}>{errorMsg}</ErrorContainer>
    </Modal>
  );
};

const ErrorContainer = styled.div`
  position: fixed;
  bottom: ${(p) => (p.isVisible ? 100 : -100)}px;
  transition: bottom ease-in-out 0.25s;
  background-color: #d24f4f;
  border-radius: 100px;
  padding: 0.5em 1em;
`;

export default CreateAccountModal;
