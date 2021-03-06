import styled from "styled-components";

export default function SetRow({
  exercise,
  repIdx,
  rep,
  weight,
  setExercise,
  units,
}) {
  const setRep = (newVal) => {
    if (newVal < 0) return;
    const newData = { ...exercise };
    newData.reps[repIdx] = newVal;
    setExercise(newData);
  };
  const setWeight = (newVal) => {
    if (newVal < 0) return;
    const newData = { ...exercise };
    newData.weights[repIdx] = newVal;
    setExercise(newData);
  };
  return (
    <RepRow key={repIdx}>
      <NumberInput value={weight} onChange={(e) => setWeight(e.target.value)} />
      {units}
      <NumberInput value={rep} onChange={(e) => setRep(e.target.value)} />
      Reps
    </RepRow>
  );
}

const RepRow = styled.div`
  width: 70%;
  background-color: #0a2c56;
  border-radius: 17px;
  display: flex;
  justify-content: space-between;
  padding: 0em 2.6em;
  font-size: 0.6em;
  margin: 0.5em 1em;
`;

const NumberInput = styled.input.attrs({
  type: "number",
})`
  background-color: #00244e;
  outline: none;
  border: none;
  text-align: center;
  width: 4em;
`;
