import styled from "styled-components";

export const Input = styled.input`
  background-color: ${(p) => p.theme.colors.background3};
  border-radius: 100px;
  font-size: 1em;
  padding: 0.3em 0.8em;
  margin: 0.3em 0.5em;
  width: 100%;
  color: white;
  border: none;
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;
