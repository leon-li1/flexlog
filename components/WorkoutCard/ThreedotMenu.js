import styled from "styled-components";
import useErrorMsg from "../../hooks/useErrorMsg";
import UpsertWorkoutModal from "../UpsertWorkoutModal";
import { useState } from "react";
import axios from "axios";

export default function ThreedotMenu({
  workoutId,
  setWorkouts,
  units,
  setOpenMenu,
}) {
  const [error, trigger] = useErrorMsg();
  const [addVisible, setAddVisible] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/workouts/${workoutId}`,
        { withCredentials: true }
      );
      const defaultData = {
        name: await res.data.name,
        eIds: await res.data.exercises.map((e) => e._id),
        exercises: await res.data.exercises.map((e) => ({
          name: e.name,
          sets: e.sets,
          weights: e.weights,
          reps: e.reps,
        })),
      };
      return defaultData;
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/workouts/delete/${workoutId}`,
        { withCredentials: true }
      );
      setOpenMenu(false);
      setWorkouts(res.data);
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  const handleDuplicate = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8000/workouts/duplicate/${workoutId}`,
        {},
        { withCredentials: true }
      );
      setOpenMenu(false);
      setWorkouts(res.data);
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  return (
    <MenuContainer>
      {error}
      <UpsertWorkoutModal
        key={workoutId}
        isVisible={addVisible}
        setVisible={setAddVisible}
        setWorkouts={setWorkouts}
        units={units}
        initialData={getData()}
        isUpdate={true}
        workoutId={workoutId}
        setOpenMenu={setOpenMenu}
      />
      <Option onClick={() => setAddVisible(true)}>Edit</Option>
      <Option onClick={handleDuplicate}>Duplicate</Option>
      <Option onClick={handleDelete}>Delete</Option>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: absolute;
  left: 70%;
  overflow: hidden;
  width: 10vw;
  border-radius: 22px;
  background-color: white;
`;

const Option = styled.p`
  padding: 0.3em;
  color: ${(p) => p.theme.colors.background3};
  :hover {
    background-color: #e7e7e7;
  }
`;
