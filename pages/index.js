import styled from "styled-components";
import Header from "../components/Header/index";
import LoginModal from "../components/LoginModal/index";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Title>You can't improve what you can't track...</Title>
        <LoginModal />
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

const Quote = styled.p`
  padding: 0.6em 0;
`;
