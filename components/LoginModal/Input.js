import styled from "styled-components";

const Input = styled.input`
  display: block;
  background-color: ${(p) => p.theme.colors.background3};
  width: 100%;
  border-radius: 17px;
  font-size: 1em;
  margin: 0.5em;
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

export default Input;
