import styled from "styled-components";
import Header from "../components/Header/index";
import ResetPasswordModal from "../components/ResetPasswordModal/index";

export default function ResetPassword() {
  const errorMsg = "Invalid email";
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Title>You don't improve what you don't track...</Title>
        <ResetPasswordModal />
        <Quote>
          “Today I will do what others won’t, so tomorrow I can accomplish what
          others can’t.” —Jerry Rice
        </Quote>
        <Quote>
          “Do something today that your future self will thank you for.”
          —Unknown
        </Quote>
        <Quote>
          “We are what we repeatedly do. Excellence then is not an act but a
          habit.” —Aristotle
        </Quote>
        <ErrorContainer hidden={errorMsg ? false : true}>
          {errorMsg}
        </ErrorContainer>
      </MainContainer>
    </PageContainer>
  );
}

const ErrorContainer = styled.div`
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

const Quote = styled.p`
  padding: 0.6em 0;
`;
