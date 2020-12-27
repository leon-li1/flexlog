import styled from "styled-components";
import Header from "../components/Header/index";
import WorkoutCard from "../components/WorkoutCard/index";
import WorkoutOptions from "../components/WorkoutOptions/index";

export default function Dashboard() {
  const errorMsg = "Incorrect email or password";
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <LabelContainer>
            <NameLabel>MY WORKOUTS</NameLabel>
            <WorkoutLabel>3 Workouts</WorkoutLabel>
          </LabelContainer>
          <WorkoutOptions />
        </Container>
        <Container2>
          <WorkoutCard />
          <WorkoutCard />
        </Container2>
      </MainContainer>
    </PageContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 1em 2em;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding: 1em;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 1em 0em;
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
`;

const NameLabel = styled.p`
  font-size: 4em;
  font-weight: 1000;
  line-height: 1;
`;

const WorkoutLabel = styled.p`
  font-size: 1em;
`;
