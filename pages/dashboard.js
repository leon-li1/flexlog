import styled from "styled-components";
import Header from "../components/Header";
import WelcomeCard from "../components/DashboardCards/Welcome";
import PointsCard from "../components/DashboardCards/Points";
import GraphCard from "../components/DashboardCards/Graph";
import QuoteCard from "../components/DashboardCards/Quote";
import Options from "../components/DashboardOptions";
import SettingsPopup from "../components/SettingsPopup";
import InfoPopup from "../components/InfoPopup";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [state, setState] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, error, user, setUser] = useLogin();
  const router = useRouter();

  if (error) router.push("/");
  if (loading || error) return <Loader />;

  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <WelcomeCard userName={user.name} stars={user.stars} />
          <PointsCard points={user.points} />
          <Options set={setState} setVisible={setPopupVisible} />
        </Container>
        <Container>
          <GraphCard />
          <QuoteCard />
        </Container>
      </MainContainer>
      {
        {
          Settings: (
            <SettingsPopup
              set={setState}
              user={user}
              setUser={setUser}
              isVisible={popupVisible}
              setVisible={setPopupVisible}
            />
          ),
          Info: (
            <InfoPopup
              set={setState}
              isVisible={popupVisible}
              setVisible={setPopupVisible}
            />
          ),
        }[state]
      }
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
