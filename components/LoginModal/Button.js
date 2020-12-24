import styled from "styled-components";

const MyButton = styled.button`
  display: block;
  font-size: 1em;
  background-color: white;
  color: #002d61;
  width: 100%;
  border-radius: 100px;
  padding: 0.2em 0;
  margin: 0.3em 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export default MyButton;
