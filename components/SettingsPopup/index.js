import styled from "styled-components";
import { ModalTitle } from "../LoginModal/Modal";
import { useState } from "react";
import axios from "axios";

const SettingsPopup = () => {
  const [text, setText] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    units: "",
  });

  const confirmChanges = async () => {
    await axios.post("http://localhost:8000/api/users/add", text);
    alert(text);
  };

  const handleChange = (event) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  return (
    <Modal>
      <ModalTitle>Settings</ModalTitle>
      <FieldContainer>
        <label>Change name</label>
        <Input
          name="name"
          type="text"
          placeholder="Name..."
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <label for="email">Change email</label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="Email..."
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <label for="name">Change password</label>
        <Input
          name="password"
          id="password"
          type="password"
          placeholder="Password..."
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <label for="name">Confirm password</label>
        <Input
          name="passwordConfirm"
          id="passwordConfirm"
          type="password"
          placeholder="Confirm password..."
          onChange={handleChange}
        />
      </FieldContainer>
      <FieldContainer>
        <label>Change units</label>
        <select
          style={{ color: "black" }}
          value={text.units}
          onChange={handleChange}
          name="units"
          id="units"
        >
          <option value="metric" selected="selected">
            Metric (kg)
          </option>
          <option value="imperial">Imperial (lb)</option>
        </select>
      </FieldContainer>
      <BtnContainer>
        <Button onClick={() => console.log("cancel")}>Cancel</Button>
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
  /* align-items: center; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  padding: 1.5em 2em;
  /* margin: 2em 0; */
  left: 20%;
  top: 25%;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
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

  :focus {
    outline: none;
  }
`;

export default SettingsPopup;
