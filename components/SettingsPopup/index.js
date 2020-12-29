import styled from "styled-components";
import { ModalTitle } from "../LoginModal/Modal";
import { useState, useRef } from "react";
import UnitsSwitch from "./UnitsSwitch";
import useErrorMsg from "../../hooks/useErrorMsg";
import axios from "axios";

const SettingsPopup = ({ set, user, setUser }) => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputPasswordConfirm = useRef();
  const [error, trigger] = useErrorMsg();
  const [units, setUnits] = useState("Metric");

  const confirmChanges = async () => {
    const text = {
      name: inputName.current.value || user.name,
      email: inputEmail.current.value || user.email,
      password: inputPassword.current.value || "TEST",
      passwordConfirm: inputPasswordConfirm.current.value || "TEST",
      units: units,
    };
    try {
      const res = await axios.patch(
        "http://localhost:8000/api/users/update",
        text,
        { withCredentials: true }
      );
      setUser(res.data);
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  return (
    <Modal>
      {error}
      <ModalTitle>Settings</ModalTitle>
      <FieldContainer>
        <label htmlFor="name">Change name</label>
        <Input id="name" type="text" placeholder={user.name} ref={inputName} />
      </FieldContainer>
      <FieldContainer>
        <label for="email">Change email</label>
        <Input
          id="email"
          type="email"
          placeholder={user.email}
          ref={inputEmail}
        />
      </FieldContainer>
      <FieldContainer>
        <label for="password">Change password</label>
        <Input
          id="password"
          type="password"
          placeholder="Password..."
          ref={inputPassword}
        />
      </FieldContainer>
      <FieldContainer>
        <label for="passwordConfirm">Confirm password</label>
        <Input
          id="passwordConfirm"
          type="password"
          placeholder="Confirm password..."
          ref={inputPasswordConfirm}
        />
      </FieldContainer>
      <FieldContainer>
        <UnitsSwitch units={user.units} setUnits={setUnits} />
      </FieldContainer>
      <BtnContainer>
        <Button onClick={() => set("")}>Cancel</Button>
        <Button onClick={() => confirmChanges()}>Confirm changes</Button>
      </BtnContainer>
    </Modal>
  );
};

const Modal = styled.div`
  width: 60vw;
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 1.5em 2em;
  left: 20%;
  top: 25%;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0em;
`;

const BtnContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const Input = styled.input`
  display: block;
  background-color: ${(p) => p.theme.colors.background3};
  width: 70%;
  border-radius: 17px;
  font-size: 1em;
  margin: 0.5em;
  margin-left: auto;
  padding: 0.3em 0.8em;
  color: white;
  border: none;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  font-size: 1em;
  background-color: white;
  color: #002d61;
  border-radius: 100px;
  padding: 0.2em 0.8em;
  margin: 0.3em 0.3em;
  cursor: pointer;
  font-weight: 600;

  :focus {
    outline: none;
  }
`;

export default SettingsPopup;
