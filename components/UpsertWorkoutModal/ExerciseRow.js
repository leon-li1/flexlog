import styled from "styled-components";
import SetRow from "./SetRow";

export const ExerciseRow = ({
  setData,
  exercise,
  idx,
  focused = true,
  onFocus = () => null,
  units,
}) => {
  const setExercise = (updatedFields) =>
    setData((data) => {
      const newData = { ...data };
      newData.exercises[idx] = { ...exercise, ...updatedFields };
      return newData;
    });

  const removeSet = () => {
    const newSets = exercise.sets - 1;
    const newReps = [...exercise.reps];
    const newWeights = [...exercise.weights];
    newReps.pop();
    newWeights.pop();
    setExercise({
      sets: newSets,
      reps: newReps,
      weights: newWeights,
    });
  };

  const addSet = () => {
    const newSets = exercise.sets + 1;
    const newReps = [...exercise.reps];
    const newWeights = [...exercise.weights];
    newReps.push(0);
    newWeights.push(0);
    setExercise({
      sets: newSets,
      reps: newReps,
      weights: newWeights,
    });
  };

  return (
    <Container>
      <ExerciseNum>Exercise #{idx + 1}</ExerciseNum>
      <RightContainer onClick={onFocus}>
        <MainRow>
          <TextInput
            value={exercise.name}
            onChange={(e) => setExercise({ name: e.target.value })}
          />
          <NumExerciseButton onClick={addSet}>+</NumExerciseButton>
          <NumExerciseButton onClick={removeSet}>-</NumExerciseButton>
        </MainRow>
        <RepContainer focused={focused}>
          {exercise.reps.map((_, repIdx) => (
            <SetRow
              key={repIdx}
              exercise={exercise}
              repIdx={repIdx}
              rep={exercise.reps[repIdx]}
              weight={exercise.weights[repIdx]}
              setExercise={setExercise}
              units={units}
            />
          ))}
        </RepContainer>
      </RightContainer>
    </Container>
  );
};

const NumExerciseButton = styled.button`
  background-color: #0c3360;
  border-radius: 17px;
  width: 3em;
  margin: 0 3px;
  border: none;
  cursor: pointer;
  font-size: 1.4em;
  line-height: 1;
  :hover {
    background-color: #00244e;
  }
  :focus {
    outline: none;
  }
`;

const TextInput = styled.input.attrs({
  type: "text",
  placeholder: "Exercise name...",
})`
  background-color: #00244e;
  outline: none;
  border: none;
  width: 100%;
  height: 1em;
  color: #fff;
`;

const ExerciseNum = styled.span`
  font-size: 0.8em;
  width: 8em;
`;

const RepContainer = styled.div`
  height: ${(p) => (p.focused ? "100%" : "0px")};
  transition: height ease-in-out 0.5s;
  overflow: hidden;
`;

const RightContainer = styled.div`
  width: 100%;
  margin: 0 0.2em;
  font-size: 0.8em;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.3em 0;
`;

const MainRow = styled.div`
  background-color: #0a2c56;
  border-radius: 17px;
  height: 1.8em;
  padding: 0 1em;
  display: flex;
  align-items: center;
`;
