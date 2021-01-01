import { useState, useEffect } from "react";
import styled from "styled-components";
import PopupModal from "../PopupModal";
import { Input } from "../Input";
import { ExerciseRow } from "./ExerciseRow";
import axios from "axios";
import useErrorMsg from "../../hooks/useErrorMsg";

const UpsertWorkoutModal = ({
  isVisible,
  setVisible,
  setWorkouts,
  units,
  initialData,
  isUpdate,
  workoutId,
  setOpenMenu,
}) => {
  const defaultData = {
    name: "",
    eIds: [],
    exercises: [
      {
        name: "",
        sets: 1,
        weights: [0],
        reps: [0],
      },
    ],
  };

  const [data, setData] = useState(defaultData);
  const [focusedIdx, setFocusedIdx] = useState(null);
  const [error, trigger] = useErrorMsg();
  const firstWord = isUpdate ? "Update" : "Add";

  useEffect(() => {
    const init = async () => setData((await initialData) || defaultData);
    init();
  }, []);

  const addExercise = () => {
    const newData = { ...data };
    newData.exercises.push({ name: "", sets: 1, weights: [0], reps: [0] });
    setData(newData);
  };

  const removeExercise = () => {
    const newData = { ...data };
    newData.exercises.pop();
    setData(newData);
  };

  const submitWorkout = async () => {
    const req = {
      name: data.name,
      numExercises: data.exercises.length,
      eNames: data.exercises.map((e) => e.name),
      eSets: data.exercises.map((e) => e.sets),
      eWeights: data.exercises.map((e) => e.weights),
      eReps: data.exercises.map((e) => e.reps),
    };

    if (isUpdate) {
      req.existingExercises = (await initialData).eIds.map((e) => {
        if (data.eIds.includes(e)) return e;
      });
      try {
        const res = await axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/workouts/update/${workoutId}`,
          req,
          { withCredentials: true }
        );
        setWorkouts(res.data);
        setData(defaultData);
        setFocusedIdx(null);
        setVisible(false);
        setOpenMenu(false);
      } catch (err) {
        trigger(err?.response?.data || err.toString());
      }
    } else {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/workouts/add`,
          req,
          { withCredentials: true }
        );
        setWorkouts(res.data);
        setData(defaultData);
        setFocusedIdx(null);
        setVisible(false);
      } catch (err) {
        trigger(err?.response?.data || err.toString());
      }
    }
  };

  return (
    <PopupModal isVisible={isVisible} setVisible={setVisible}>
      {error}
      <h2>{firstWord} a workout</h2>
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
          units={units}
        />
      ))}
      <ActionContainer>
        <ActionButton onClick={() => setVisible(false)}>Cancel</ActionButton>
        <ActionButton onClick={submitWorkout}>{firstWord} workout</ActionButton>
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
  margin: 0 0.5em;
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
