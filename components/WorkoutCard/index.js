import styled from "styled-components";
import { useState } from "react";
import ThreeDots from "./ThreeDots";
import ExerciseInfo from "./ExcersiseInfo";

export default function WelcomeCard() {
  const [workout, setWorkout] = useState({
    name: "Back and Biceps",
    exercises: [
      {
        name: "Hammer curls",
        sets: 3,
        weights: [30, 40, 50],
        reps: [10, 8, 6],
      },
      {
        name: "Lat pulldown",
        sets: 3,
        weights: [120, 150, 180],
        reps: [10, 8, 6],
      },
      {
        name: "Bent over rows",
        sets: 3,
        weights: [80, 90, 100],
        reps: [10, 8, 6],
      },
      {
        name: "Hammer curls",
        sets: 3,
        weights: [30, 40, 50],
        reps: [10, 8, 6],
      },
      {
        name: "Lat pulldown",
        sets: 3,
        weights: [120, 150, 180],
        reps: [10, 8, 6],
      },
      {
        name: "Bent over rows",
        sets: 3,
        weights: [80, 90, 100],
        reps: [10, 8, 6],
      },
      {
        name: "Hammer curls",
        sets: 3,
        weights: [30, 40, 50],
        reps: [10, 8, 6],
      },
      {
        name: "Lat pulldown",
        sets: 3,
        weights: [120, 150, 180],
        reps: [10, 8, 6],
      },
      {
        name: "Bent over rows",
        sets: 3,
        weights: [80, 90, 100],
        reps: [10, 8, 6],
      },
    ],
  });

  const zip = (a, b) => a.map((aVal, i) => [aVal, b[i]]);

  return (
    <Card>
      <MyContainer2>
        <NameLabel>{workout.name}</NameLabel>
        <StyledThreeDots />
      </MyContainer2>
      <MyContainer>
        {workout.exercises.map((ex) => {
          return (
            <ExerciseInfo name={ex.name} sets={zip(ex.weights, ex.reps)} />
          );
        })}
      </MyContainer>
    </Card>
  );
}

const Card = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1.5em 2em;
  margin: 1em;
  border-radius: 36px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(282.47deg, #0c3360 0.56%, #234771 86.94%), #01c1cf;
`;

const NameLabel = styled.p`
  font-size: 1.5em;
  font-weight: 1000;
  line-height: 1;
  margin-bottom: 0.25em;
`;

const MyContainer = styled.div`
  margin: 0em -1em;
  padding: 0em 1em;
  overflow-y: scroll;
  height: 100%;
`;

const MyContainer2 = styled.div`
  margin: 0em -1em;
  padding: 0em 1em;
  display: flex;
  flex-direction: row;
`;

const StyledThreeDots = styled(ThreeDots)`
  margin-left: auto;
`;
