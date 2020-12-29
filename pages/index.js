import styled from "styled-components";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import CreateAccountModal from "../components/CreateAccountModal";
import ResetPasswordModal from "../components/ResetPasswordModal";
import Quotes from "../components/Quotes";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("Login");

  return (
    <PageContainer>
      <Header isLoggedout={true} />
      <MainContainer>
        <Title>You don't improve what you don't track...</Title>
        {
          {
            Login: <LoginModal setState={setState} />,
            CreateAccount: <CreateAccountModal setState={setState} />,
            Code: <ResetPasswordModal setState={setState} />,
          }[state]
        }
        <Quotes />
      </MainContainer>
    </PageContainer>
  );
}

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
