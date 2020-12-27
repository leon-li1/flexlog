import styled from "styled-components";

export default function ExerciseInfo({ name, sets }) {
  return (
    <>
      <ExerciseContainer>
        <p>{name}</p>
        {sets.map((set, idx) => (
          <p key={idx}>{`${set[0]} x ${set[1]}`}</p>
        ))}
      </ExerciseContainer>
    </>
  );
}

const ExerciseContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background3};
  margin: 0.5em 0em;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`;
