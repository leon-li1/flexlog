import styled from "styled-components";
import Header from "../components/Header/index";
import WelcomeCard from "../components/DashboardCards/Welcome";
import PointsCard from "../components/DashboardCards/Points";
import GraphCard from "../components/DashboardCards/Graph";
import QuoteCard from "../components/DashboardCards/Quote";
import Options from "../components/DashboardOptions/index";
import SettingsPopup from "../components/SettingsPopup/index";

export default function Dashboard() {
  const errorMsg = "Incorrect email or password";
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <WelcomeCard />
          <PointsCard />
          <Options />
        </Container>
        <Container>
          <GraphCard />
          <QuoteCard />
        </Container>
      </MainContainer>
      <SettingsPopup />
    </PageContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 0 2em;
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
  margin: 0em 0;
`;
