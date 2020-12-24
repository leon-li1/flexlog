import styled from "styled-components";

const ForgotPassword = ({ children }) => {
  const onClick = () => alert("hello");
  return (
    <Container>
      <Text onClick={onClick}>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  align-self: flex-end;
  padding: 0.5em;
`;

const Text = styled.a`
  font-size: 0.75em;
  cursor: pointer;
`;

export default ForgotPassword;
