import styled from "styled-components";
import Header from "../components/Header/index";
import WorkoutCard from "../components/WorkoutCard/index";
import WorkoutOptions from "../components/WorkoutOptions/index";
import { useState, useEffect } from "react";
import axios from "axios";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/router";
import HomeButton from "../components/HomeButton";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, error] = useLogin();
  const router = useRouter();

  useEffect(() => {
    const getWorkouts = async () => {
      const res = await axios.get("http://localhost:8000/workouts/all", {
        withCredentials: true,
      });
      setWorkouts(res.data);
    };
    getWorkouts();
  }, []);

  if (error) router.push("/");
  if (loading || error) return <Loader />;

  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Container>
          <LabelContainer>
            <NameLabel>MY WORKOUTS</NameLabel>
            <WorkoutLabel>{workouts.length} Workouts</WorkoutLabel>
          </LabelContainer>
          <WorkoutOptions />
        </Container>

        {workouts.map((workout, idx) => {
          if (idx % 2 == 1) return;
          else if (idx + 1 < workouts.length)
            return (
              <Container2 key={idx}>
                <WorkoutCard
                  key={workout._id}
                  workoutId={workout._id}
                  workouts={workouts}
                  setWorkouts={setWorkouts}
                  name={workout.name}
                  exercises={workout.exercises}
                />
                <WorkoutCard
                  key={workouts[idx + 1]._id}
                  workoutId={workouts[idx + 1]._id}
                  workouts={workouts}
                  setWorkouts={setWorkouts}
                  name={workouts[idx + 1].name}
                  exercises={workouts[idx + 1].exercises}
                />
              </Container2>
            );
          return (
            <Container2 key={idx}>
              <WorkoutCard
                key={workout._id}
                workoutId={workout._id}
                workouts={workouts}
                setWorkouts={setWorkouts}
                name={workout.name}
                exercises={workout.exercises}
              />
            </Container2>
          );
        })}
      </MainContainer>
      <HomeButton />
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
  padding: 0.5em 1em;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;
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
