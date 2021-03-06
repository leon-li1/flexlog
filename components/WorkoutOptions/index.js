import styled from "styled-components";
import ShareIcon from "./ShareIcon";
import Plus from "./Plus";
import UpsertWorkoutModal from "../UpsertWorkoutModal";
import { useState } from "react";

export default function WorkoutOptions({ setWorkouts, units }) {
  const [addVisible, setAddVisible] = useState(null);

  return (
    <OptionContainer>
      <UpsertWorkoutModal
        isVisible={addVisible}
        setVisible={setAddVisible}
        setWorkouts={setWorkouts}
        units={units}
      />
      <Option onClick={() => setAddVisible(true)}>
        <Plus />
        <Text>Add new workouts</Text>
      </Option>
      <Option>
        <ShareIcon />
        <Text>Share workouts</Text>
      </Option>
    </OptionContainer>
  );
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0em;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3em 0em 0.3em 1.2em;
  cursor: pointer;
`;

const Text = styled.p`
  padding: 0.4em;
`;
