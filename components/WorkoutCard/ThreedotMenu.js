import styled from "styled-components";
import useErrorMsg from "../../hooks/useErrorMsg";
import axios from "axios";

export default function ThreedotMenu({ workoutId, workouts, setWorkouts }) {
  const [error, trigger] = useErrorMsg();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/workouts/delete/${workoutId}`,
        { withCredentials: true }
      );
      //   const index = workouts.indexOf(workoutId);
      setWorkouts(res.data);
    } catch (err) {
      trigger(err?.response?.data || err.toString());
    }
  };

  return (
    <MenuContainer>
      {error}
      <Option>Edit</Option>
      <Option>Duplicate</Option>
      <Option onClick={handleDelete()}>Delete</Option>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: absolute;
  width: 10vw;
  border-radius: 22px;
  margin-left: auto;
  background-color: white;
`;

// TODO:: fix border rdius
const Option = styled.p`
  padding: 0.3em;
  border-radius: 22px;
  color: ${(p) => p.theme.colors.background3};
  :hover {
    background-color: #e7e7e7;
  }
`;
