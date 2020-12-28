import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PopupModal from '../PopupModal';
import Input from '../Input';
import { ExerciseRow } from './ExerciseRow';

const defaultData = {
  name: '',
  numExercises: 1,
  exercises: [{
    name: '',
    sets: 2,
    weights: [5, 10],
    reps: [10, 5],
  }]
};


const UpsertWorkoutModal = ({ isVisible, setVisible, initialData }) => {  
  const [data, setData] = useState(initialData ?? defaultData);

  function addExercise() {
    const newData = {...data};
    newData.exercises.push({ name: '', sets: 1, weights: [0], reps: [0] });
    setData(newData);
  }
  function removeExercise() {
    const newData = {...data};
    newData.exercises.pop();
    setData(newData);
  }

  return (
      <PopupModal isVisible={isVisible} setVisible={setVisible}>
        <h2>Add a workout</h2>
        <HeaderContainer>
          <NameInput/>
          <NumButtonContainer>
            <WorkoutNumButton onClick={addExercise}>+</WorkoutNumButton>
            <WorkoutNumButton onClick={removeExercise}>-</WorkoutNumButton>
          </NumButtonContainer>
        </HeaderContainer>
        {data.exercises.map((e, idx) => (
          <ExerciseRow exercise={e} idx={idx} setData={setData}/>
        ))}
      </PopupModal>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.3em 0;
`

const NameInput = styled(Input).attrs({
  placeholder: "Workout name..."
})`
  flex: 3;
  margin: 0 0.5em;
`;

const NumButtonContainer = styled.div`
  display: flex;
  margin: 0 0.1em;
  flex: 1.5;
`

const WorkoutNumButton = styled.button`
  background-color: #0A2C56;
  border-radius: 17px;
  width: 100%;
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

export default UpsertWorkoutModal;
