import styled from 'styled-components';

export const ExerciseRow = ({ setData, exercise, idx, focused = true, onFocus = () => null }) => {
  const setExercise = (updatedFields) => setData(data => {
    const newData = {...data};
    newData.exercises[idx] = {...exercise, ...updatedFields};
    return newData;
  });

  const removeRep = () => {
    const newReps = [...exercise.reps];
    const newWeights = [...exercise.weights];
    newReps.pop();
    newWeights.pop();
    setExercise({
      reps: newReps,
      weights: newWeights,
    });
  }

  const addRep = () => {
    const newReps = [...exercise.reps];
    const newWeights = [...exercise.weights];
    newReps.push(0);
    newWeights.push(0);
    setExercise({
      reps: newReps,
      weights: newWeights,
    });
  }

  return (
    <Container>
      <ExerciseNum>Exercise #{idx+1}</ExerciseNum>
      <RightContainer onClick={onFocus}>
        <MainRow>
          <TextInput value={exercise.name} onChange={e => setExercise({ name: e.target.value })} />
          <NumExerciseButton onClick={addRep}>+</NumExerciseButton>
          <NumExerciseButton onClick={removeRep}>-</NumExerciseButton>
        </MainRow>
        <RepContainer focused={focused}>
        {exercise.reps.map((_, repIdx) => {
          const rep = exercise.reps[repIdx];
          const weight = exercise.weights[repIdx];
          const setRep = (newVal) => {
            if(newVal < 0) return;
            const newData = {...exercise};
            newData.reps[repIdx] = newVal;
            setExercise(newData);
          }
          const setWeight = (newVal) => {
            if(newVal < 0) return;
            const newData = {...exercise};
            newData.weights[repIdx] = newVal;
            setExercise(newData);
          }
          return <RepRow>
            <NumberInput value={rep} onChange={(e) => setRep(e.target.value)} />
            ×
            <NumberInput value={weight} onChange={(e) => setWeight(e.target.value)} />
            lbs
          </RepRow>
        })}
        </RepContainer>
      </RightContainer>
    </Container>
  );
}

const NumExerciseButton = styled.button`
  background-color: #0c3360;
  border-radius: 17px;
  width: 3em;
  margin: 0 3px;
  border: none;
  cursor: pointer;
  font-size: 1.4em;
  line-height: 1.0;
  :hover {
    background-color: #00244e;
  }
  :focus {
    outline: none;
  }
`

const TextInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Exercise name...'
})`
  background-color: #00244e;
  outline: none;
  border: none;
  width: 100%;
  height: 1em;
  color: #fff;
`;

const NumberInput = styled.input.attrs({
  type: 'number'
})`
  background-color: #00244e;
  outline: none;
  border: none;
  text-align: center;
  display: inline;
  width: 2.5em;
`

const ExerciseNum = styled.span`
  font-size: 0.8em;
  width: 8em;
`

const RepContainer = styled.div`
  height: ${p => p.focused ? '100%' : '0px'};
  transition: height ease-in-out 0.5s;
  overflow: hidden;
`

const RepRow = styled.div`
  width: 70%;
  background-color: #0A2C56;
  border-radius: 17px;
  padding: 0 1em;
  font-size: 0.6em;
  margin: 0.5em 1em;
`

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
`

const MainRow = styled.div`
  background-color: #0A2C56;
  border-radius: 17px;
  height: 1.8em;
  padding: 0 1em;
  display: flex;
  align-items: center;
`;
