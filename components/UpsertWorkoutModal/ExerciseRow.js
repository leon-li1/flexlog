import styled from 'styled-components';

export const ExerciseRow = ({ setData, exercise, idx }) => {
  const setExercise = (updatedFields) => setData(data => {
    const newData = {...data};
    newData.exercises[idx] = {...exercise, ...updatedFields};
    return newData;
  });

  return (
    <Container>
      <span>Exercise #{idx+1}</span>
      <MainRow>stuff</MainRow>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.3em 0;
`

const MainRow = styled.div`
  background-color: #0A2C56;
  border-radius: 17px;
  width: 100%;
  margin: 0 0.2em;
`