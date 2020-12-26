import styled from "styled-components";
import Header from "../components/Header/index";
import LoginModal from "../components/LoginModal/index";
import CreateAccountModal from "../components/CreateAccountModal/index";
import ResetPasswordModal from "../components/ResetPasswordModal/index";
import Quotes from "../components/Quotes/index";
import { useState } from "react";

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(false);
  const [state, setState] = useState("Login");

  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Title>You don't improve what you don't track...</Title>
        {(() => {
          switch (state) {
            case "Login":
              return <LoginModal props={setState} />;
            case "CreateAccount":
              return <CreateAccountModal />;
            case "Code":
              return <ResetPasswordModal />;
          }
        })()}
        <Quotes />
        <button onClick={() => setErrorMsg(!errorMsg)}>toggle</button>
        <ErrorContainer isVisible={errorMsg}>
          Incorrect email or password
        </ErrorContainer>
      </MainContainer>
    </PageContainer>
  );
}

const ErrorContainer = styled.div`
  position: fixed;
  bottom: ${(p) => (p.isVisible ? -100 : 100)}px;
  transition: bottom ease-in-out 0.25s;
  background-color: #d24f4f;
  border-radius: 100px;
  padding: 0.5em 1em;
`;

const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background1};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0;
`;

const Title = styled.h2`
  font-size: 2.3em;
`;
