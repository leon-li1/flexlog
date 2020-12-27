import styled from "styled-components";
import Header from "../components/Header/index";
import WorkoutCard from "../components/WorkoutCard/index";
import WorkoutOptions from "../components/WorkoutOptions/index";

export default function Dashboard() {
  const errorMsg = "Incorrect email or password";
  const state = [
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPfLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
          __v: 0,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
          pr: 320,
          __v: 0,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPfLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
          __v: 0,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
          pr: 320,
          __v: 0,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
        },
      ],
      name: "PPfLj",
      numExercises: 2,
    },
    {
      exercises: [
        {
          weights: [30, 40],
          reps: [12, 10],
          scores: [360, 400],
          name: "Curls",
          sets: 2,
          __v: 0,
        },
        {
          weights: [40, 45],
          reps: [8, 6],
          scores: [320, 270],
          name: "bench",
          sets: 2,
          pr: 320,
          __v: 0,
        },
      ],
      name: "PPLj",
      numExercises: 2,
    },
  ];

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

        {state.map((workout, idx) => {
          if (idx % 2 == 1) return;
          else if (idx + 1 < state.length)
            return (
              <Container2>
                <WorkoutCard
                  name={workout.name}
                  exercises={workout.exercises}
                />
                <WorkoutCard
                  name={state[idx + 1].name}
                  exercises={state[idx + 1].exercises}
                />
              </Container2>
            );
          return (
            <Container2>
              <WorkoutCard name={workout.name} exercises={workout.exercises} />
            </Container2>
          );
        })}
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
  padding: 0.5em 1em;
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
