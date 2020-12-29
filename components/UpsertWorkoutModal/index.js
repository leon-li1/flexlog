import { useState, useEffect } from "react";
import styled from "styled-components";
import PopupModal from "../PopupModal";
import Input from "../Input";
import { ExerciseRow } from "./ExerciseRow";
import axios from "axios";
import useErrorMsg from "../../hooks/useErrorMsg";

// {
//     "name": "leg2s3",
//     "numExercises": 2,
//     "eNames": ["squa32", "rai23"],
//     "eSets": [2,2],
//     "eWeights": [[30, 40],[40, 45]],
//     "eReps": [[12, 10],[8, 6]]
// }

const defaultData = {
  name: "",
  exercises: [
    {
      name: "",
      sets: 1,
      weights: [0],
      reps: [0],
    },
  ],
};

const UpsertWorkoutModal = ({
  isVisible,
  setVisible,
  setWorkouts,
  initialData,
}) => {
  const [data, setData] = useState(initialData ?? defaultData);
  const [focusedIdx, setFocusedIdx] = useState(null);
  const [error, trigger] = useErrorMsg();

  function addExercise() {
    const newData = { ...data };
    newData.exercises.push({ name: "", sets: 1, weights: [0], reps: [0] });
    setData(newData);
  }
  function removeExercise() {
    const newData = { ...data };
    newData.exercises.pop();
    setData(newData);
  }

  const addWorkout = async () => {
    const req = {
      name: data.name,
      numExercises: data.exercises.length,
      eNames: data.exercises.map((e) => e.name),
      eSets: data.exercises.map((e) => e.sets),
      eWeights: data.exercises.map((e) => e.weights),
      eReps: data.exercises.map((e) => e.reps),
    };

    console.log(data);
    console.log(req);
    try {
      const res = await axios.post("http://localhost:8000/workouts/add", req, {
        withCredentials: true,
      });
      setWorkouts(res.data);
      setData(defaultData);
      setVisible(false);
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  return (
    <PopupModal isVisible={isVisible} setVisible={setVisible}>
      {error}
      <h2>Add a workout</h2>
      <HeaderContainer>
        <NameInput
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <NumButtonContainer>
          <WorkoutNumButton onClick={addExercise}>+</WorkoutNumButton>
          <WorkoutNumButton onClick={removeExercise}>-</WorkoutNumButton>
        </NumButtonContainer>
      </HeaderContainer>
      {data.exercises.map((e, idx) => (
        <ExerciseRow
          key={idx}
          exercise={e}
          idx={idx}
          setData={setData}
          focused={idx === focusedIdx}
          onFocus={() => setFocusedIdx(idx)}
        />
      ))}
      <ActionContainer>
        <ActionButton onClick={() => setVisible(false)}>Cancel</ActionButton>
        <ActionButton onClick={addWorkout}>Add workout</ActionButton>
      </ActionContainer>
    </PopupModal>
  );
};

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 0;
`;

const ActionButton = styled.button`
  background-color: #fff;
  color: #000;
  border-radius: 17px;
  margin: 0 3px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.6em;
  padding: 0.5em;
  line-height: 1;
  :focus {
    outline: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.3em 0;
`;

const NameInput = styled(Input).attrs({
  placeholder: "Workout name...",
})`
  flex: 3;
  margin: 0 0.5em;
`;

const NumButtonContainer = styled.div`
  display: flex;
  margin: 0 0.1em;
  flex: 1.5;
`;

const WorkoutNumButton = styled.button`
  background-color: #0a2c56;
  border-radius: 17px;
  width: 100%;
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

export default UpsertWorkoutModal;
