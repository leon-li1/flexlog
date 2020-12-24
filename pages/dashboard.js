import styled from "styled-components";
import Header from "../components/Header/index";
import WelcomeCard from "../components/DashboardCards/Welcome";
import PointsCard from "../components/DashboardCards/Points";
import GraphCard from "../components/DashboardCards/Graph";
import QuoteCard from "../components/DashboardCards/Quote";

export default function Dashboard() {
  const errorMsg = "Incorrect email or password";
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <WelcomeCard />
          <PointsCard />
        </Container>
        <Container>
          <GraphCard />
          <QuoteCard />
        </Container>
      </MainContainer>
    </PageContainer>
  );
}

const Container = styled.div`
  display: flex;
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
