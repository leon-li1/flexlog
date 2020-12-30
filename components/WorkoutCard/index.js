import styled from "styled-components";
import ThreeDots from "./ThreeDots";
import ThreeDotMenu from "./ThreedotMenu";
import ExerciseInfo from "./ExcersiseInfo";
import { useState } from "react";

export default function Workoutcard({
  workoutId,
  setWorkouts,
  name,
  exercises,
  units,
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const zip = (a, b) => a.map((aVal, i) => [aVal, b[i]]);

  return (
    <Card>
      <MyContainer2>
        <NameLabel>{name}</NameLabel>
        <StyledThreeDots openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </MyContainer2>
      <MyContainer>
        {openMenu && (
          <ThreeDotMenu
            workoutId={workoutId}
            setWorkouts={setWorkouts}
            units={units}
            setOpenMenu={setOpenMenu}
          />
        )}
        {exercises.map((ex, idx) => (
          <ExerciseInfo
            key={idx}
            name={ex.name}
            sets={zip(ex.weights, ex.reps)}
          />
        ))}
      </MyContainer>
    </Card>
  );
}

const Card = styled.div`
  width: 45vw;
  max-height: 50vh;
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
