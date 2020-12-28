import styled from "styled-components";
import Header from "../components/Header/index";
import WelcomeCard from "../components/DashboardCards/Welcome";
import PointsCard from "../components/DashboardCards/Points";
import GraphCard from "../components/DashboardCards/Graph";
import QuoteCard from "../components/DashboardCards/Quote";
import Options from "../components/DashboardOptions/index";
import SettingsPopup from "../components/SettingsPopup/index";
import InfoPopup from "../components/InfoPopup/index";
import { useState, useEffect } from "react";
import axios from "axios";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [state, setState] = useState("");
  const [loading, error, user] = useLogin();
  const router = useRouter();

  if (error) router.push("/");
  if (loading || error) return <p>loading...</p>;

  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <WelcomeCard userName={user.name} stars={user.stars} />
          <PointsCard points={user.points} />
          <Options set={setState} />
        </Container>
        <Container>
          <GraphCard />
          <QuoteCard />
        </Container>
      </MainContainer>
      {(() => {
        switch (state) {
          case "Settings":
            return <SettingsPopup set={setState} user={user} />;
          case "Info":
            return <InfoPopup set={setState} />;
        }
      })()}
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
